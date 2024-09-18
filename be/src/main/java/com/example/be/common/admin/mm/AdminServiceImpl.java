package com.example.be.common.admin.mm;

import com.example.be.common.admin.mm.dto.ReportStoreAdminDto;
import com.example.be.common.domain.report.entity.ErrorType;
import com.example.be.common.domain.report.entity.Report;
import com.example.be.common.domain.report.service.ReportService;
import com.example.be.common.domain.store.dtos.StoreCreateDto;
import com.example.be.common.domain.store.dtos.StoreUpdateDto;
import com.example.be.common.domain.store.service.StoreService;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AdminServiceImpl implements AdminService {

  private final ReportService reportService;
  private final StoreService storeService;


  @Override
  public List<ReportStoreAdminDto> getReportStoreAll() {
    return reportService.getReportStoreAll();
  }

  @Override
  public void StoreUpdateByReport(Long reportId, StoreUpdateDto storeDto) {
    Report report = reportService.findById(reportId);
    if (!Objects.equals(report.getStore().getId(), storeDto.getId())) {
      throw new IllegalArgumentException("해당 리포트의 대상 매장이 아닙니다.");
    }
    storeService.updateStore(storeDto);
  }

  @Override
  public void createStoreByReport(Long reportId, StoreCreateDto storeDto) {
    Report report = reportService.findById(reportId);
    if(!report.getErrorType().equals(ErrorType.notThere)){
      throw new IllegalArgumentException("해당 매장은 이미 존재합니다.");
    }
    storeService.createStoreByDto(storeDto);


  }

  @Override
  public void deleteStore(Long storeId) {
    storeService.deleteStore(storeId);
  }

  @Override
  public void deleteReport(Long reportId) {
    reportService.deleteReport(reportId);
  }


}
