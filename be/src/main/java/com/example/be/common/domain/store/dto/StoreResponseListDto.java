package com.example.be.common.domain.store.dto;

import com.example.be.common.domain.store.entity.Store;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class StoreResponseListDto {

    private Long storeId;
    private String storeName;
    private String storeEnum;
    private float latitude;

    private float longitude;

    public StoreResponseListDto(Store store) {
        this.storeId = store.getId();
        this.storeName = store.getStoreName();
        this.storeEnum = store.getMiddleCategory();
        this.latitude = store.getLatitude();
        this.longitude = store.getLongitude();
    }
}
