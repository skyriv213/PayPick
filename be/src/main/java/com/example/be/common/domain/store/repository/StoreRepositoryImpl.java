package com.example.be.common.domain.store.repository;


import static com.example.be.common.domain.store.entity.QStore.store;

import com.example.be.common.domain.store.dtos.StoreResponseListDto;
//import com.example.be.common.domain.store.entity.QStore;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.transaction.Transactional;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class StoreRepositoryImpl implements StoreRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    @Transactional
    public List<StoreResponseListDto> findAllStoreInMap(double leftLatitude, double leftLongitude,
        double rightLatitude, double rightLongitude) {
//        QStore store = QStore.store;
        List<StoreResponseListDto> storeResponseListDtos = jpaQueryFactory.select(
                Projections.constructor(StoreResponseListDto.class,
                    store.id,
                    store.storeName,
                    store.middleCategory,
                    store.latitude,
                    store.longitude))
            .from(store)
            .where(
                (store.latitude.goe(leftLatitude).and(store.latitude.loe(rightLatitude)))
                    .and(
                        store.longitude.goe(leftLongitude).and(store.longitude.loe(rightLongitude)))
            ).fetch();
        return storeResponseListDtos;
    }
}
