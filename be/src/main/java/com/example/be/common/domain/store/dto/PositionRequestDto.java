package com.example.be.common.domain.store.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class PositionRequestDto {

    private Point leftPosition;
    private Point rightPosition;

}
