package com.example.be.common.admin.mm;

import com.example.be.common.admin.mm.dto.ReportStoreAdminDto;
import com.example.be.common.domain.store.dtos.StoreCreateDto;
import com.example.be.common.domain.store.dtos.StoreUpdateDto;
import java.util.List;

public interface AdminService {

  List<ReportStoreAdminDto> getReportStoreAll();

  void StoreUpdateByReport(Long reportId, StoreUpdateDto storeDto);

  void createStoreByReport(Long reportId, StoreCreateDto storeDto);

  void deleteStore(Long storeId);
}
