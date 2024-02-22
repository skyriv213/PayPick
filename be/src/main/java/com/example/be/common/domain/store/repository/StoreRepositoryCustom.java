package com.example.be.common.domain.store.repository;

import com.example.be.common.domain.store.dto.StoreResponseListDto;
import java.util.List;

public interface StoreRepositoryCustom {

    List<StoreResponseListDto> findAllStoreInMap(double leftX, double leftY, double rightX, double rightY);
}
