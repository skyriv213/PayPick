package com.example.be.common.domain.report.repository;

import com.example.be.common.domain.report.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long>, ReportRepositoryCustom {


  boolean existsByStore(Long StoreId);
}
