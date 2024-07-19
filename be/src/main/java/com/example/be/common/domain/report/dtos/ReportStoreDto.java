package com.example.be.common.domain.report.dtos;

import com.example.be.common.domain.report.entity.ErrorType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ReportStoreDto {

  private String storeName;

  private ErrorType errorType;

  private String errorContent;

}
