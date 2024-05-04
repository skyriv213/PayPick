package com.example.be.common.domain.payway.dtos;

import com.example.be.common.domain.payway.entity.PayType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentRequest {

    private PayType payType;
    private Boolean checkPay;

}
