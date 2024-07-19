package com.example.be.common.domain.report.controller;

import static com.example.be.common.domain.report.controller.ReportController.REPORT_URI;
import static com.example.be.common.utils.HttpResponseEntity.RESPONSE_OK;
import static com.example.be.common.utils.enums.ResponseMessages.SUCCESS;

import com.example.be.common.domain.report.dtos.ReportStoreDto;
import com.example.be.common.domain.report.service.ReportService;
import com.example.be.common.dto.StatusResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(REPORT_URI)
public class ReportController {

  private final ReportService reportService;

  public static final String REPORT_URI = "/report";

  @PostMapping("/{storeId}")
  public ResponseEntity reportExistStore(@PathVariable("storeId") Long storeId, @RequestBody ReportStoreDto reportStoreDto) {
    reportService.reportExistStore(storeId, reportStoreDto);
    return RESPONSE_OK;
  }


  @PostMapping
  public ResponseEntity reportStore(@RequestBody ReportStoreDto reportStoreDto) {
    reportService.reportStore(reportStoreDto);
    return RESPONSE_OK;
  }



}
