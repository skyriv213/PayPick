package com.example.be.common.domain.report.service;

import com.example.be.common.admin.mm.dto.ReportStoreAdminDto;
import com.example.be.common.domain.report.dtos.ReportStoreDto;
import com.example.be.common.domain.report.entity.Report;
import java.util.List;

public interface ReportService {

  void reportExistStore(Long storeId, ReportStoreDto reportStoreDto);

  void reportStore(ReportStoreDto reportStoreDto);

  List<ReportStoreAdminDto> getReportStoreAll();

  Report findById(Long reportId);
}
