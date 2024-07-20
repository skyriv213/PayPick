package com.example.be.common.domain.payway.dtos;

import com.example.be.common.domain.payway.entity.PayType;
import com.example.be.common.domain.payway.entity.Payment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDto {
  private Long id;

  private PayType payType;

  public PaymentDto(Payment payment) {
    this.id = payment.getId();
    this.payType = payment.getPayType();
  }

}
