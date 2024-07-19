package com.example.be.common.admin.mm.dto;


import com.example.be.common.domain.report.entity.ErrorType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class ReportStoreAdminDto {

  private Long reportId;
  private ErrorType errorType;
  private String errorContent;
  private Long storeId;
  private String name;
  private String majorCategory;
  private String middleCategory;
  private Double lat;
  private Double lng;
  private String address;


}
