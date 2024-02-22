package com.example.be;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class BeApplication {

    @GetMapping("/")
    public String Test() {
        return "hello";
    }
    public static void main(String[] args) {
        SpringApplication.run(BeApplication.class, args);
    }

}
