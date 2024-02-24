package com.example.be.common.global.exception;

import static com.example.be.common.utils.HttpResponseEntity.BAD_REQUEST;
import static com.example.be.common.utils.HttpResponseEntity.CONFLICT;
import static com.example.be.common.utils.HttpResponseEntity.FORBIDDEN;

import com.example.be.common.dto.StatusResponse;
import java.nio.file.AccessDeniedException;
import java.util.List;
import java.util.stream.Collectors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(MethodArgumentNotValidException.class)
    private ResponseEntity<StatusResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        log.error("잘못된 요청입니다.", e);
        return BAD_REQUEST;
    }

    @ExceptionHandler(AccessDeniedException.class)
    private ResponseEntity<StatusResponse> handleAccessDeniedException(AccessDeniedException e) {
        log.error("권한이 없습니다.", e);
        return FORBIDDEN;
    }


    @ExceptionHandler(DataIntegrityViolationException.class)
    private ResponseEntity<StatusResponse> handleDataIntegrityViolationException(DataIntegrityViolationException e) {
        log.error("데이터 저장 오류입니다.", e);
        return CONFLICT;
    }

//    @ExceptionHandler(Exception.class)
//    private ResponseEntity<StatusResponse> handleException(Exception e) {
//        log.error("예상치 못한 오류가 발생했습니다.", e);
//        return ResponseEntity.internalServerError().build();
//    }
}
