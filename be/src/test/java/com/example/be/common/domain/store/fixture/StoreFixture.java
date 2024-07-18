package com.example.be.common.domain.store.fixture;

import com.example.be.common.domain.store.dtos.Point;
import com.example.be.common.domain.store.dtos.PositionDto;
import com.example.be.common.domain.store.dtos.StoreDto;
import com.example.be.common.domain.store.dtos.StoreResponseListDto;
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
        .roadAddress("storeAddress")
        .latitude(1.0)
        .longitude(1.0)
        .paymentList(new ArrayList<>())
        .build();

    public static final Point POINT = Point.builder()
        .lat(1.0).lng(1.0)
        .build();
    public static final PositionDto POSITION_REQUEST_DTO = PositionDto.builder()
        .leftPosition(POINT)
        .rightPosition(POINT)
        .build();

    public static final StoreDto STORE_DTO = StoreDto.builder()
        .id(1L)
        .name("storeName")
        .majorCategory("majorCategory")
        .middleCategory("middleCategory")
        .address("address")
        .paymentList(new ArrayList<>())
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
