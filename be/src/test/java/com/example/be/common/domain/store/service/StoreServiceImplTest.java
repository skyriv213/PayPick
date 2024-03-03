package com.example.be.common.domain.store.service;

import static com.example.be.common.domain.store.fixture.StoreFixture.POSITION_REQUEST_DTO;
import static com.example.be.common.domain.store.fixture.StoreFixture.STORE;
import static com.example.be.common.domain.store.fixture.StoreFixture.STORE_ID;
import static com.example.be.common.domain.store.fixture.StoreFixture.STORE_RESPONSE_LIST_DTO;
import static com.example.be.common.domain.store.fixture.StoreFixture.STORE_RESPONSE_LIST_DTO_LIST;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;

import com.example.be.common.domain.store.dto.Point;
import com.example.be.common.domain.store.dto.StoreDto;
import com.example.be.common.domain.store.dto.StoreResponseListDto;
import com.example.be.common.domain.store.repository.StoreRepository;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class StoreServiceImplTest {

    @Mock
    StoreRepository storeRepository;

    @InjectMocks
    StoreServiceImpl storeService;

    @Test
    @DisplayName("지역 가게 정보 리스트 가져오기 성공")
    void getStoreInMap() {
        when(storeRepository
            .findAllStoreInMap(
                POSITION_REQUEST_DTO.getLeftPosition().getLat(),
                POSITION_REQUEST_DTO.getLeftPosition().getLng(),
                POSITION_REQUEST_DTO.getRightPosition().getLat(),
                POSITION_REQUEST_DTO.getRightPosition().getLng()
            )).thenReturn(STORE_RESPONSE_LIST_DTO_LIST);

        List<StoreResponseListDto> storeInMap = storeService.getStoreInMap(POSITION_REQUEST_DTO);

        assertThat(storeInMap).isNotNull(); // 리스트가 null이 아님을 확인
        assertThat(storeInMap.size()).isGreaterThan(0); // 빈 리스트가 아님을 확인
        assertThat(storeInMap.get(0).getId()).isEqualTo(STORE_RESPONSE_LIST_DTO.getId());
        assertThat(storeInMap.get(0).getName()).isEqualTo(STORE_RESPONSE_LIST_DTO.getName());
    }

    @Test
    @DisplayName("가게 상세 정보 가져오기 성공")
    void getStoreInfo() {
        when(storeRepository.findById(STORE_ID)).thenReturn(Optional.ofNullable(STORE));
        StoreDto storeInfo = storeService.getStoreInfo(STORE_ID);
        assertThat(storeInfo).isNotNull(); // 객체가 null이 아님을 확인
        assertThat(storeInfo.getName()).isEqualTo(STORE.getStoreName());
        assertThat(storeInfo.getAddress()).isEqualTo(STORE.getStoreAddress());

    }
    
}