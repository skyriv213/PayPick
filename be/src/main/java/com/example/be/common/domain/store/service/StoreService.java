package com.example.be.common.domain.store.service;

import com.example.be.common.domain.store.dto.PositionRequestDto;
import com.example.be.common.domain.store.dto.StoreDto;
import com.example.be.common.domain.store.dto.StoreResponseListDto;
import com.example.be.common.domain.store.entity.Store;
import java.util.List;

public interface StoreService {

    List<StoreResponseListDto> getStoreInMap(PositionRequestDto request);

    StoreDto getStoreInfo(Long storeId);

//    List<Store> findAll();
}
