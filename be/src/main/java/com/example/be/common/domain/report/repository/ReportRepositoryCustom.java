package com.example.be.common.domain.report.repository;


import com.example.be.common.admin.mm.dto.ReportStoreAdminDto;
import java.util.List;

public interface ReportRepositoryCustom {

    List<ReportStoreAdminDto> getReportStoreAll();
}
