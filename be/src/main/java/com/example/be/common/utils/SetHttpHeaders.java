package com.example.be.common.utils;


import java.nio.charset.StandardCharsets;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;

@Component
public class SetHttpHeaders {

    public String setHttpHeaderTypeJson() {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(new MediaType("application", "json", StandardCharsets.UTF_8));
        return String.valueOf(httpHeaders);
    }
}
