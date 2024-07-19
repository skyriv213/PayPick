package com.example.be.common.domain.report.entity;


import com.example.be.common.domain.report.dtos.ReportStoreDto;
import com.example.be.common.domain.store.entity.Store;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Table
@Entity
@Builder
@Getter
public class Report {

  @Id
  @Column(name = "report_id", nullable = false)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String storeName;

  private ErrorType errorType;

  private String errorContent;

  @ManyToOne
  @JoinColumn(name = "store_id")
  private Store store;

  public Report(ReportStoreDto reportStoreDto) {
    this.storeName = reportStoreDto.getStoreName();
    this.errorType = reportStoreDto.getErrorType();
    this.errorContent = reportStoreDto.getErrorContent();
  }
}

