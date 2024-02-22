package com.example.be.common.domain.store.controller;

import static com.example.be.common.domain.store.controller.StoreController.STORE_API_URI;

import com.example.be.common.domain.store.dto.PositionRequestDto;
import com.example.be.common.domain.store.dto.StoreDto;
import com.example.be.common.domain.store.dto.StoreResponseListDto;
import com.example.be.common.domain.store.entity.Store;
import com.example.be.common.domain.store.service.StoreService;
import com.example.be.common.utils.SetHttpHeaders;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(STORE_API_URI)
public class StoreController {

    private final StoreService storeService;
    public static final String STORE_API_URI = "/store";
    private SetHttpHeaders setHttpHeaders;

    @GetMapping
    public ResponseEntity<List<StoreResponseListDto>> getStoreInMap(
        @RequestBody PositionRequestDto request) {
        List<StoreResponseListDto> responseDtoList = storeService.getStoreInMap(request);
        return ResponseEntity.ok().header(setHttpHeaders.setHttpHeaderTypeJson())
            .body(responseDtoList);
    }

    @GetMapping("/{storeId}")
    public ResponseEntity<StoreDto> getStoreInfo(@PathVariable Long storeId) {
        StoreDto storeDto = storeService.getStoreInfo(storeId);
        return ResponseEntity.ok().body(storeDto);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Store>> allList() {
        List<Store> storeList = storeService.findAll();
        return ResponseEntity.ok().body(storeList);
    }

}
