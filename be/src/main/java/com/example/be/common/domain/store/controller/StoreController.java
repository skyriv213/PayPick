package com.example.be.common.domain.store.controller;

import static com.example.be.common.domain.store.controller.StoreController.STORE_API_URI;

import com.example.be.common.domain.store.dtos.Point;
import com.example.be.common.domain.store.dtos.PositionDto;
import com.example.be.common.domain.store.dtos.StoreDto;
import com.example.be.common.domain.store.dtos.StoreResponseListDto;
import com.example.be.common.domain.store.service.StoreService;
import com.example.be.common.utils.SetHttpHeaders;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(STORE_API_URI)
public class StoreController {

    private final StoreService storeService;
    public static final String STORE_API_URI = "/store";
    private final SetHttpHeaders setHttpHeaders;

    @GetMapping
    public ResponseEntity<List<StoreResponseListDto>> getStoreInMap(
        @RequestParam("boundary") String boundary
    ) {
        PositionDto request = parsePosition(boundary);
        List<StoreResponseListDto> responseDtoList = storeService.getStoreInMap(request);
        return ResponseEntity.ok().headers(setHttpHeaders.setHttpHeaderTypeJson())
            .body(responseDtoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StoreDto> getStoreInfo(@PathVariable("id") Long storeId) {
        StoreDto storeDto = storeService.getStoreInfo(storeId);
        return ResponseEntity.ok().headers(setHttpHeaders.setHttpHeaderTypeJson()).body(storeDto);
    }
//    @PatchMapping("/{id}")
//    public ResponseEntity<StatusResponse> updateStroeInfo(@PathVariable("id") Long storeId, @RequestBody)
//

    private PositionDto parsePosition(String boundary){
        String[] parts = boundary.split(";");
        if (parts.length != 4) {
            throw new IllegalArgumentException("Invalid boundary parameter: " + boundary);
        }

        double leftlat= Double.parseDouble(parts[0]);
        double leftlng = Double.parseDouble(parts[1]);
        double rightlat = Double.parseDouble(parts[2]);
        double rightlng = Double.parseDouble(parts[3]);
        return PositionDto.builder().leftPosition(new Point(leftlat,leftlng)).rightPosition(new Point(rightlat,rightlng)).build();
    }
//    @GetMapping("/all")
//    public ResponseEntity<List<Store>> allList() {
//        List<Store> storeList = storeService.findAll();
//        return ResponseEntity.ok().headers(setHttpHeaders.setHttpHeaderTypeJson()).body(storeList);
//    }

}
