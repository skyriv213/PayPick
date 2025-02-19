package com.example.be.common.domain.store.dtos;

import com.example.be.common.domain.payway.entity.Payment;
import com.example.be.common.domain.payway.dtos.PaymentDto;
import com.example.be.common.domain.store.entity.Store;
import java.util.List;
import java.util.stream.Collectors;
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
    private List<PaymentDto> paymentList;

    public StoreDto(Store store) {
        this.id = store.getId();
        this.name = store.getStoreName();
        this.majorCategory = store.getMajorCategory();
        this.middleCategory = store.getMiddleCategory();
        this.address = store.getRoadAddress();
        this.paymentList = store.getPaymentList().stream()
            .map(PaymentDto::new)
            .collect(Collectors.toList());
    }
}
