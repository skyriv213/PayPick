package com.example.be.common.domain.report.service;

import com.example.be.common.admin.mm.dto.ReportStoreAdminDto;
import com.example.be.common.domain.report.dtos.ReportStoreDto;
import com.example.be.common.domain.report.entity.Report;
import com.example.be.common.domain.report.entity.Report.ReportBuilder;
import com.example.be.common.domain.report.repository.ReportRepository;
import com.example.be.common.domain.store.entity.Store;
import com.example.be.common.domain.store.service.StoreService;
import jakarta.transaction.Transactional;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {

  private final ReportRepository reportRepository;
  private final StoreService storeService;

  @Override
  @Transactional
  public void reportExistStore(Long storeId, ReportStoreDto reportStoreDto) {
    if (reportRepository.existsByStore(storeId)) {
       Report report = new Report(reportStoreDto);
       reportRepository.save(report);
    }
    throw new IllegalArgumentException("해당 가게는 존재하지 않습니다");

  }

  @Override
  @Transactional
  public void reportStore(ReportStoreDto reportStoreDto) {

    Store store = storeService.createStore(reportStoreDto.getStoreName());
//    Store store = storeService.findByStoreName(reportStoreDto.getStoreName());
//    if(!store.getStoreName().equals(reportStoreDto.getStoreName())){
//      throw new IllegalArgumentException("해당 가게는 일치하지 않습니다.");
//    }
    Report report = Report.builder().store(store)
        .storeName(reportStoreDto.getStoreName())
        .errorType(reportStoreDto.getErrorType())
        .errorContent(reportStoreDto.getErrorContent())
        .build();

    reportRepository.save(report);

  }

  @Override
  public List<ReportStoreAdminDto> getReportStoreAll() {
    List<ReportStoreAdminDto> reportStoreAdminDtos = reportRepository.getReportStoreAll();
    return List.of();
  }

  @Override
  public Report findById(Long reportId) {
    Report report = reportRepository.findById(reportId)
        .orElseThrow(() -> new IllegalArgumentException("해당 리포트는 존재하지 않습니다."));
    return report;
  }
}
