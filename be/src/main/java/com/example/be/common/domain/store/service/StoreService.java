package com.example.be.common.domain.store.service;

import com.example.be.common.domain.store.dtos.PositionDto;
import com.example.be.common.domain.store.dtos.StoreCreateDto;
import com.example.be.common.domain.store.dtos.StoreDto;
import com.example.be.common.domain.store.dtos.StoreResponseListDto;
import com.example.be.common.domain.store.dtos.StoreUpdateDto;
import com.example.be.common.domain.store.entity.Store;
import java.util.List;

public interface StoreService {

  boolean existsByStoreId(Long storeId);

  List<StoreResponseListDto> getStoreInMap(PositionDto request);

  StoreDto getStoreInfo(Long storeId);

  Store findByStoreName(String storeName);

  Store createStore(String storeName);

  void updateStore(StoreUpdateDto storeDto);

  void createStoreByDto(StoreCreateDto storeDto);

  void deleteStore(Long storeId);

  boolean existsByStoreName(String storeName);

  Store findById(Long storeId);

//    List<Store> findAll();
}
