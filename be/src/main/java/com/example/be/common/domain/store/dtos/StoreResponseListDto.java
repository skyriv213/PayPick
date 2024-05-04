package com.example.be.common.domain.store.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StoreResponseListDto {

    private Long id;
    private String name;
    private String middleCategory;
    private double lat;

    private double lng;

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
