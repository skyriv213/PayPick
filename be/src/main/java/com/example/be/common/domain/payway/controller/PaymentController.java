package com.example.be.common.domain.payway.controller;


import static com.example.be.common.domain.payway.controller.PaymentController.PAYMENT_URI;
import static com.example.be.common.utils.HttpResponseEntity.RESPONSE_OK;

import com.example.be.common.domain.payway.dtos.PaymentRequest;
import com.example.be.common.dto.StatusResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(PAYMENT_URI)
public class PaymentController {

    public static final String PAYMENT_URI = "/payment";

    //추가 및 삭제

    @PostMapping("/{id}")
    public ResponseEntity<StatusResponse> createStorePayment(@PathVariable("id") Long storeId,
        @RequestBody PaymentRequest paymentDto) {
        return RESPONSE_OK;
    }
//
//    @DeleteMapping("{id}")
//    public ResponseEntity<StatusResponse> deleteStorePayment(@PathVariable("id") Long storeId,
//        )
}
