package com.example.be.common.domain.store.repository;

import static com.example.be.common.domain.store.entity.QStore.store;

import com.example.be.common.domain.store.dto.StoreResponseListDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.transaction.Transactional;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class StoreRepositoryImpl implements StoreRepositoryCustom{

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    @Transactional
    public List<StoreResponseListDto> findAllStoreInMap(double leftX, double leftY, double rightX,
        double rightY) {
        List<StoreResponseListDto> storeResponseListDtos = jpaQueryFactory
            .select(Projections.constructor(StoreResponseListDto.class,
                store.id,
                store.storeName,
                store.middleCategory,
                store.latitude,
                store.longitude
            )).from(store).where(
                (store.latitude.between(leftY, rightY).and(store.longitude.between(leftX, rightX)))
            ).fetch();
        return storeResponseListDtos;
    }
}
