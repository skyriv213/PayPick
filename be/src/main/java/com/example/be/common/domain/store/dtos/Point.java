package com.example.be.common.domain.store.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Point {

    //latitude, x
    private double lat;
    //longitude, y
    private double lng;
}
