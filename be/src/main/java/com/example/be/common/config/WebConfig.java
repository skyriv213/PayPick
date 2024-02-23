package com.example.be.common.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{

//    @Bean
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("**/**")
//            .allowedMethods("GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS") // OPTIONS 추가
//            .allowedHeaders("*") // 필요한 경우 모든 헤더를 허용
//            .allowCredentials(true) // 필요한 경우 쿠키/인증 정보 포함
//            .allowCredentials(true) // 쿠키 인증 요청 허용
////            .exposedHeaders("Authorization", "Refresh")
//            .maxAge(3600); // preflight 결과를 1시간 동안 캐
//    }
}
