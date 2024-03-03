package com.example.be.common.domain.store.controller;

import static com.example.be.common.domain.store.fixture.StoreFixture.POSITION_REQUEST_DTO;
import static com.example.be.common.domain.store.fixture.StoreFixture.STORE_DTO;
import static com.example.be.common.domain.store.fixture.StoreFixture.STORE_ID;
import static com.example.be.common.domain.store.fixture.StoreFixture.STORE_RESPONSE_LIST_DTO;
import static com.example.be.common.domain.store.fixture.StoreFixture.STORE_RESPONSE_LIST_DTO_LIST;
import static com.example.be.restdocs.APIDocumentUtils.getDocumentRequest;
import static com.example.be.restdocs.APIDocumentUtils.getDocumentResponse;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestFields;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.example.be.common.domain.store.service.StoreService;
import com.example.be.common.utils.SetHttpHeaders;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.RestDocumentationExtension;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

@ExtendWith({SpringExtension.class, RestDocumentationExtension.class})
@WebMvcTest(controllers = StoreController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
class StoreControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    StoreService storeService;

    @MockBean
    SetHttpHeaders setHttpHeaders;



    @Test
    @WithMockUser
    void getStoreInMap() throws Exception {

        String json = objectMapper.writeValueAsString(STORE_RESPONSE_LIST_DTO);

        given(storeService.getStoreInMap(any())).willReturn(STORE_RESPONSE_LIST_DTO_LIST);

        ResultActions resultActions = mockMvc.perform(
                get("/store")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(objectMapper.writeValueAsBytes(POSITION_REQUEST_DTO))
                    .with(csrf()))
            .andExpect(status().isOk());

        resultActions.andDo(document("storeController/getStoreInMap",
                getDocumentRequest(),
                getDocumentResponse(),
                requestFields(
                    fieldWithPath("leftPosition.lat").type(JsonFieldType.NUMBER)
                        .description("좌하단 위도"),
                    fieldWithPath("leftPosition.lng").type(JsonFieldType.NUMBER)
                        .description("좌하단 경도"),
                    fieldWithPath("rightPosition.lat").type(JsonFieldType.NUMBER)
                        .description("우상단 위도"),
                    fieldWithPath("rightPosition.lng").type(JsonFieldType.NUMBER)
                        .description("우상단 경도")
                ),
                responseFields(
                    fieldWithPath("[].id").type(JsonFieldType.NUMBER).description("가게 id"),
                    fieldWithPath("[].name").type(JsonFieldType.STRING).description("가게 이름"),
                    fieldWithPath("[].lat").type(JsonFieldType.NUMBER).description("가게 위도"),
                    fieldWithPath("[].lng").type(JsonFieldType.NUMBER).description("가게 경도"),
                    fieldWithPath("[].middleCategory").type(JsonFieldType.STRING).description("가게 분야")
                )

            )
        );

    }

    @Test
    @WithMockUser
    void getStoreInfo() throws Exception {

        String json = objectMapper.writeValueAsString(STORE_DTO);

        given(storeService.getStoreInfo(any())).willReturn(STORE_DTO);

        ResultActions resultActions = mockMvc.perform(
                get("/store/{storeId}", STORE_ID)
                    .with(csrf()))
            .andExpect(status().isOk());

        resultActions.andDo(document("storeController/getStoreInfo",
                getDocumentRequest(),
                getDocumentResponse(),
                responseFields(
                    fieldWithPath("id").type(JsonFieldType.NUMBER).description("가게 id"),
                    fieldWithPath("name").type(JsonFieldType.STRING).description("가게 이름"),
                    fieldWithPath("majorCategory").type(JsonFieldType.STRING).description("가게 대분류"),
                    fieldWithPath("middleCategory").type(JsonFieldType.STRING).description("가게 중분류"),
                    fieldWithPath("address").type(JsonFieldType.STRING).description("가게 주소"),
                    fieldWithPath("paywayList").type(JsonFieldType.ARRAY).description("가게 경도")
                )

            )
        );

    }

//    @Test
//    void allList() {
//    }
}