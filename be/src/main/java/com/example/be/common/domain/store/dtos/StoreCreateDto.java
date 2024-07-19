package com.example.be.common.domain.store.dtos;

import com.example.be.common.domain.payway.entity.Payment;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class StoreCreateDto {

    private String name;

    private String majorCategory;

    private String middleCategory;

    private String address;

    private List<Payment> paymentList;

    private double lat;

    private double lng;

}
