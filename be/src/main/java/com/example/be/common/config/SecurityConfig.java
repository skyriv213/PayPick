package com.example.be.common.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {

        httpSecurity.cors(cors -> cors.configurationSource(corsConfigurationSource()));

        httpSecurity.csrf(csrf -> csrf.disable());

//        httpSecurity.headers(headers -> headers.xssProtection().);
//            .xssProtection().contentSecurityPolicy("default-src 'self'"

        httpSecurity.sessionManagement(sessionManagement -> sessionManagement.sessionCreationPolicy(
            SessionCreationPolicy.STATELESS));


        httpSecurity.authorizeHttpRequests(auth -> auth
            .requestMatchers("/store/**", "/report/**", "/admin/**", "/room/**")
            .permitAll()
            .requestMatchers(HttpMethod.GET, "/").permitAll()
            .requestMatchers("/ws/chat/**").permitAll()
            .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
            .anyRequest().authenticated());

        return httpSecurity.build();
    }
//
//    @Bean
//    public CorsConfigurationSource corsConfigurationSource() {
////        CorsConfiguration configuration = new CorsConfiguration();
////        configuration.setAllowedMethods(Arrays.asList("*"));
////        configuration.setAllowCredentials(true);
////        configuration.addAllowedHeader("*");
////        configuration.setExposedHeaders(Arrays.asList("*"));
////
////        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////        source.registerCorsConfiguration("/**", configuration);
////        return source;
//        CorsConfiguration configuration = new CorsConfiguration();
//        configuration.addAllowedOrigin("*"); // 특정 도메인 허용
//        configuration.addAllowedOriginPattern("*"); // 도메인 패턴 허용
//        configuration.addAllowedOrigin("http://localhost:3000"); // 특정 도메인 허용
////        configuration.addAllowedOrigin("http://localhost"); // 특정 도메인 허용
////        configuration.addAllowedOriginPattern("http://localhost:3000");  // 정확한 도메인 패턴 허용
////        configuration.addAllowedOriginPattern("http://localhost");  // 정확한 도메인 패턴 허용
//        configuration.setAllowedMethods(Arrays.asList("*"));
//        configuration.setAllowCredentials(true);
//        configuration.setAllowedHeaders(Arrays.asList("*"));
//        configuration.addAllowedHeader("*");
//        configuration.setExposedHeaders(Arrays.asList("*"));
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        // 특정 도메인 허용
        configuration.addAllowedOrigin("https://localhost:3000");

        // 허용할 HTTP 메서드 지정
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));

        // 허용할 헤더 지정
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Cache-Control", "Content-Type"));

        // 자격 증명 허용 (쿠키 등)
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

}
