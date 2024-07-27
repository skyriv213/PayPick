package com.example.be.common.domain.store.service;

import com.example.be.common.domain.store.dtos.PositionDto;
import com.example.be.common.domain.store.dtos.StoreCreateDto;
import com.example.be.common.domain.store.dtos.StoreDto;
import com.example.be.common.domain.store.dtos.StoreResponseListDto;
import com.example.be.common.domain.store.dtos.StoreUpdateDto;
import com.example.be.common.domain.store.entity.Store;
import com.example.be.common.domain.store.repository.StoreRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StoreServiceImpl implements StoreService {

    private final StoreRepository storeRepository;

    @Override
    public boolean existsByStoreId(Long storeId) {
        return storeRepository.existsById(storeId);
    }

    @Override
    public List<StoreResponseListDto> getStoreInMap(PositionDto request) {
        double leftLatitude = request.getLeftPosition().getLat();
        double leftLongitude = request.getLeftPosition().getLng();
        double rightLatitude = request.getRightPosition().getLat();
        double rightLongitude = request.getRightPosition().getLng();

        List<StoreResponseListDto> storeList = storeRepository.findAllStoreInMap(leftLatitude, leftLongitude, rightLatitude, rightLongitude);
        return storeList;
    }

    @Override
    public StoreDto getStoreInfo(Long storeId) {
        Store store = storeRepository.findById(storeId)
            .orElseThrow(() -> new IllegalArgumentException("해당 매장은 존재하지 않습니다"));
        StoreDto storeDto = new StoreDto(store);
        return storeDto;
    }

    @Override
    public Store findByStoreName(String storeName) {
        Store store = storeRepository.findByStoreName(storeName);
        return store;
    }

    @Override
    @Transactional
    public Store createStore(String storeName) {
        Store store = Store.builder().storeName(storeName).build();
        storeRepository.save(store);
        return store;
    }

    @Override
    @Transactional
    public void updateStore(StoreUpdateDto storeDto) {

        Store store = storeRepository.findById(storeDto.getId())
            .orElseThrow(() -> new IllegalArgumentException("해당 매장은 존재하지않습니다"));

        store.updateByDto(storeDto);
    }

    @Override
    @Transactional
    public void createStoreByDto(StoreCreateDto storeDto) {
        Store store = Store.builder()
            .storeName(storeDto.getName())
            .address(storeDto.getAddress())
            .majorCategory(storeDto.getMajorCategory())
            .middleCategory(storeDto.getMiddleCategory())
            .latitude(storeDto.getLat())
            .longitude(storeDto.getLng())
            .paymentList(storeDto.getPaymentList())
            .build();

        storeRepository.save(store);
    }

    @Override
    @Transactional
    public void deleteStore(Long storeId) {
        storeRepository.deleteById(storeId);
    }

    @Override
    public boolean existsByStoreName(String storeName) {
        return storeRepository.existsByStoreName(storeName);
    }

//    @Override
//    public List<Store> findAll() {
//        return storeRepository.findAll();
//    }

}
