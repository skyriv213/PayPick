package com.example.be.common.domain.store.entity;

import com.example.be.common.domain.payway.entity.Payment;
import com.example.be.common.domain.report.entity.Report;
import com.example.be.common.domain.store.dtos.StoreUpdateDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.querydsl.core.annotations.QueryEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

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
    @Column(nullable = false)
    private Long id;

    @Column(name = "store_name", nullable = false, length = 255)
    private String storeName;

    @Column(name = "major_category", nullable = false, length = 250)
    private String majorCategory;

    @Column(name = "middle_category", nullable = true, length = 250)
    private String middleCategory;

    @Column(name = "address", nullable = false, length = 255)
    private String address;

    @Column(name = "road_address", nullable = true, length = 255)
    private String roadAddress;

    @Column(name = "description", nullable = true, length = 500)
    private String description;

    @Column(name = "telephone", nullable = true, length = 50)
    private String telephone;

    @Column(name = "latitude", nullable = false)
    private Double latitude;

    @Column(name = "longitude", nullable = false)
    private Double longitude;

    @OneToMany(mappedBy = "store", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Builder.Default
    @JsonManagedReference
    private List<Payment> paymentList = new ArrayList<>();

    @OneToMany(mappedBy = "store", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    @JsonIgnore
    private List<Report> reports = new ArrayList<>();

    public void updateByDto(StoreUpdateDto storeDto) {
        this.address = storeDto.getAddress();
        this.paymentList = storeDto.getPaymentList();
        this.latitude = storeDto.getLat();
        this.longitude = storeDto.getLng();
        this.majorCategory = storeDto.getMajorCategory();
        this.middleCategory = storeDto.getMiddleCategory();
        this.storeName = storeDto.getName();
    }
}
