package com.example.be.common.domain.store.service;

import com.example.be.common.domain.store.dtos.PositionDto;
import com.example.be.common.domain.store.dtos.StoreDto;
import com.example.be.common.domain.store.dtos.StoreResponseListDto;
import com.example.be.common.domain.store.entity.Store;
import com.example.be.common.domain.store.repository.StoreRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StoreServiceImpl implements StoreService {

    private final StoreRepository storeRepository;

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

//    @Override
//    public List<Store> findAll() {
//        return storeRepository.findAll();
//    }

}
