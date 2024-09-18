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
  /***
   * 이미 존재하는 매장, 매장 전용 오류 전송을 통해 리포트 작성
   */
  public void reportExistStore(Long storeId, ReportStoreDto reportStoreDto) {
    if (!storeService.existsByStoreId(storeId)) {
      throw new IllegalArgumentException("해당 가게는 존재하지 않습니다");
    }
    Report report = new Report(reportStoreDto);
    reportRepository.save(report);

  }

  @Override
  @Transactional
  /***
   * 기본 오류 전송을 통해 리포트 작성
   * 1. 매장 정보가 존재하는 경우
   * 2. 매장 정보가 존재하지않는 경우
   * if 문으로 분기점 판별
   */
  public void reportStore(ReportStoreDto reportStoreDto) {
//    Store store;
//    if(!storeService.existsByStoreName(reportStoreDto.getStoreName())){
//      store = storeService.createStore(reportStoreDto.getStoreName());
//    }
//    else {
//      store = storeService.findByStoreName(reportStoreDto.getStoreName());
//    }
    Report report = Report.builder()
//        .store(store)
        .storeName(reportStoreDto.getStoreName())
        .errorType(reportStoreDto.getErrorType())
        .errorContent(reportStoreDto.getErrorContent())
        .build();
    reportRepository.save(report);
  }

  @Override
  public List<ReportStoreAdminDto> getReportStoreAll() {
    List<ReportStoreAdminDto> reportStoreAdminDtos = reportRepository.getReportStoreAll();
    return reportStoreAdminDtos;
  }

  @Override
  public Report findById(Long reportId) {
    Report report = reportRepository.findById(reportId)
        .orElseThrow(() -> new IllegalArgumentException("해당 리포트는 존재하지 않습니다."));
    return report;
  }

  @Override
  @Transactional
  public void deleteReport(Long reportId) {
    reportRepository.deleteById(reportId);
  }
}
