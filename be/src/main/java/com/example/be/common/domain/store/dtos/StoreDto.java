package com.example.be.common.domain.store.dtos;

import com.example.be.common.domain.payway.entity.Payment;
import com.example.be.common.domain.store.entity.Store;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class StoreDto {
    private Long id;

    private String name;

    private String majorCategory;

    private String middleCategory;

    private String address;

    private List<Payment> paymentList;

    public StoreDto (Store store) {
        this.id = store.getId();
        this.name = store.getStoreName();
        this.majorCategory = store.getMajorCategory();
        this.middleCategory = store.getMiddleCategory();
        this.address = store.getStoreAddress();
        this.paymentList = store.getPaymentList();
    }

}
