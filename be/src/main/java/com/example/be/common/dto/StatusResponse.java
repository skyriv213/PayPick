package com.example.be.common.dto;

import com.example.be.common.utils.enums.ResponseMessages;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.ResponseEntity;

@Getter
@AllArgsConstructor
public class StatusResponse {

    private int statusCode;
    private String message;

    public static StatusResponse valueOf(ResponseMessages responseMessages) {
        return new StatusResponse(responseMessages.getStatusCode(), responseMessages.getMessage());
    }
}
