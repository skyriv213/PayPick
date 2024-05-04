package com.example.be.common.domain.store.service;

import com.example.be.common.domain.store.dtos.PositionDto;
import com.example.be.common.domain.store.dtos.StoreDto;
import com.example.be.common.domain.store.dtos.StoreResponseListDto;
import java.util.List;

public interface StoreService {

    List<StoreResponseListDto> getStoreInMap(PositionDto request);

    StoreDto getStoreInfo(Long storeId);

//    List<Store> findAll();
}
