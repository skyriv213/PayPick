package com.example.be.common.domain.report.repository;


//import static com.example.be.common.domain.store.entity.QStore.store;
import static com.example.be.common.domain.report.entity.QReport.report;
import static com.example.be.common.domain.store.entity.QStore.store;

import com.example.be.common.admin.mm.dto.ReportStoreAdminDto;
import com.example.be.common.domain.store.dtos.StoreResponseListDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.transaction.Transactional;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ReportRepositoryImpl implements ReportRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;


    @Override
    public List<ReportStoreAdminDto> getReportStoreAll() {
        List<ReportStoreAdminDto> getReportStoreAll = jpaQueryFactory.select(
                Projections.constructor(ReportStoreAdminDto.class,
                    report.id,
                    report.errorType,
                    report.errorContent,
                    store.id,
                    report.storeName,
                    store.majorCategory,
                    store.middleCategory,
                    store.latitude,
                    store.longitude,
                    store.address)).from(report)
            .innerJoin(store).on(report.storeName.eq(store.storeName))
            .fetch();

        return getReportStoreAll;
    }
}



