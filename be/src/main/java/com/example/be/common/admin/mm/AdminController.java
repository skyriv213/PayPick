package com.example.be.common.admin.mm;

import static com.example.be.common.admin.mm.AdminController.ADMIN_URI;
import static com.example.be.common.utils.HttpResponseEntity.RESPONSE_OK;

import com.example.be.common.admin.mm.dto.ReportStoreAdminDto;
import com.example.be.common.domain.store.dtos.StoreCreateDto;
import com.example.be.common.domain.store.dtos.StoreUpdateDto;
import com.example.be.common.dto.StatusResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(ADMIN_URI)
public class AdminController {

  public static final String ADMIN_URI = "/admin";

  private final AdminService adminService;

  @GetMapping
  public ResponseEntity<List<ReportStoreAdminDto>> getReportStoreAll() {
    List<ReportStoreAdminDto> reportStoreAdminDtos = adminService.getReportStoreAll();
    return ResponseEntity.ok().body(reportStoreAdminDtos);
  }

  @PostMapping("/{reportId}")
  public ResponseEntity<StatusResponse> createStoreByReport(@PathVariable Long reportId,
      @RequestBody StoreCreateDto storeDto) {
    adminService.createStoreByReport(reportId, storeDto);
    return RESPONSE_OK;
  }

  @PatchMapping("/{reportId}")
  public ResponseEntity<StatusResponse> StoreUpdateByReport(@PathVariable Long reportId,
      @RequestBody
      StoreUpdateDto storeDto) {
    adminService.StoreUpdateByReport(reportId, storeDto);
    return RESPONSE_OK;
  }

  @DeleteMapping("/store/{storeId}")
  public ResponseEntity<StatusResponse> deleteStore(@PathVariable Long storeId) {
    adminService.deleteStore(storeId);
    return RESPONSE_OK;
  }

  @DeleteMapping("/{reportId}")
  public ResponseEntity<StatusResponse> deleteReport(@PathVariable Long reportId) {
    adminService.deleteReport(reportId);
    return RESPONSE_OK;
  }
}

