package com.example.be.common.domain.store.fixture;

import com.example.be.common.domain.store.dto.Point;
import com.example.be.common.domain.store.dto.PositionRequestDto;
import com.example.be.common.domain.store.dto.StoreDto;
import com.example.be.common.domain.store.dto.StoreResponseListDto;
import com.example.be.common.domain.store.entity.Store;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class StoreFixture {

    public static final Store STORE = Store.builder()
        .id(1L)
        .storeName("storeName")
        .majorCategory("majorCategory")
        .middleCategory("middleCategory")
        .storeAddress("storeAddress")
        .latitude(1.0)
        .longitude(1.0)
        .paywayList(new ArrayList<>())
        .build();

    public static final Point POINT = Point.builder()
        .lat(1.0).lng(1.0)
        .build();
    public static final PositionRequestDto POSITION_REQUEST_DTO = PositionRequestDto.builder()
        .leftPosition(POINT)
        .rightPosition(POINT)
        .build();

    public static final StoreDto STORE_DTO = StoreDto.builder()
        .id(1L)
        .name("storeName")
        .majorCategory("majorCategory")
        .middleCategory("middleCategory")
        .address("address")
        .paywayList(new ArrayList<>())
        .build();

    public static final StoreResponseListDto STORE_RESPONSE_LIST_DTO = StoreResponseListDto.builder()
        .id(1L)
        .name("storeName")
        .lat(1L)
        .lng(1L)
        .middleCategory("middleCategory")
        .build();


    public static final List<StoreResponseListDto> STORE_RESPONSE_LIST_DTO_LIST = new ArrayList<>(
        Collections.singletonList(STORE_RESPONSE_LIST_DTO));

    public static final Long STORE_ID = 1L;
}
