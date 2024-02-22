package com.example.be.common.domain.store.service;

import com.example.be.common.domain.store.dto.PositionRequestDto;
import com.example.be.common.domain.store.dto.StoreDto;
import com.example.be.common.domain.store.dto.StoreResponseListDto;
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
    public List<StoreResponseListDto> getStoreInMap(PositionRequestDto request) {
        double left_x = request.getLeftPosition().getX();
        double left_y = request.getLeftPosition().getY();
        double right_x = request.getRightPosition().getX();
        double right_y = request.getRightPosition().getY();

        List<StoreResponseListDto> storeList = storeRepository.findAllStoreInMap(left_x, left_y, right_x, right_y);
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
    public List<Store> findAll() {
        return storeRepository.findAll();
    }

}
