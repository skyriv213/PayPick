package com.example.be.common.domain.store.entity;

import com.example.be.common.domain.payway.entity.Payment;
import com.querydsl.core.annotations.QueryEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@QueryEntity
@Entity
@Table(name = "store")
public class Store {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "int", nullable = false)
    private Long id;

    @Column(name = "store_name", nullable = true, length = 255)
    private String storeName;

    @Column(nullable = true, length = 50)
    private String majorCategory;

    @Column(nullable = true, length = 50)
    private String middleCategory;

    @Column(name = "address", nullable = true, length = 255)
    private String storeAddress;

    // 위도 ----
    @Column(nullable = true)
    private Double latitude;

    // 경도 ||||
    @Column(nullable = true)
    private Double longitude;

    @OneToMany(mappedBy = "store")
    @Builder.Default
    private List<Payment> paymentList = new ArrayList<>();

}
