package com.example.be.common.domain.store.dto;

import com.example.be.common.domain.store.entity.Store;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StoreResponseListDto {

    private Long storeId;
    private String storeName;
    private String middleCategory;
    private double latitude;

    private double longitude;

//    public StoreResponseListDto(Long storeId, String storeName, String middleCategory,
//        double latitude,
//        double longitude) {
//        this.storeId = storeId;
//        this.storeName = storeName;
//        this.middleCategory = middleCategory;
//        this.latitude = latitude;
//        this.longitude = longitude;
//    }
//
//    public StoreResponseListDto(Store store) {
//        this.storeId = store.getId();
//        this.storeName = store.getStoreName();
//        this.middleCategory = store.getMiddleCategory();
//        this.latitude = store.getLatitude();
//        this.longitude = store.getLongitude();
//    }
}
