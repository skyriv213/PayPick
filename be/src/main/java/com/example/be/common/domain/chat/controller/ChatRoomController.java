package com.example.be.common.domain.chat.controller;

import static com.example.be.common.utils.HttpResponseEntity.RESPONSE_OK;

import com.example.be.common.domain.chat.dtos.ChatDto;
import com.example.be.common.domain.chat.dtos.CheckDto;
import com.example.be.common.domain.chat.service.ChatRoomService;
import com.example.be.common.dto.StatusResponse;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/room")
public class ChatRoomController {

    private final ChatRoomService chatRoomService;

    /***
     * 채팅방 생성
     * @param storeId
     * @return
     */
    @PostMapping("/{storeId}")
    public ResponseEntity<StatusResponse> createChatRoom(@PathVariable Long storeId) {
        chatRoomService.createChatRoom(storeId);
        return RESPONSE_OK;
    }

//    @GetMapping
//    public ResponseEntity<List<ChatRoomDto>> getChatRoomList(
//        @AuthenticationPrincipal UserDetailsImpl userDetails) {
//        List<ChatRoomDto> chatRoomDtoList = chatRoomService.getChatRoomList(userDetails.getUser());
//        return ResponseEntity.ok().body(chatRoomDtoList);
//    }


    /***
     * 채팅방 입장
     * @param storeId
     * @return
     */
    @GetMapping("/{storeId}")
    public ResponseEntity<List<ChatDto>> getChatRoom(@PathVariable Long storeId) {

        List<ChatDto> chatDtoList = chatRoomService.getChatRoom(storeId);

        return ResponseEntity.ok().body(chatDtoList);
    }


//    @PatchMapping("/{roomId}")
//    public ResponseEntity<StatusResponse> enterNewChatRoom(@PathVariable Long roomId) {
//        chatRoomService.enterNewChatRoom(roomId);
//        return RESPONSE_OK;
//    }

//    /***
//     * 채팅방 나가기
//     * @param roomId
//     * @param userDetails
//     * @return RESPONSE_OK
//     */
//    @DeleteMapping("/{roomId}")
//    public ResponseEntity<StatusResponse> outChatRoom(@PathVariable Long roomId,
//        @AuthenticationPrincipal UserDetailsImpl userDetails) {
//        chatRoomService.outChatRoom(roomId, userDetails.getUser());
//        return RESPONSE_OK;
//    }

//    /***
//     * 채팅방 삭제하기
//     * @param roomId
//     * @param postId
//     * @param userDetails
//     * @return RESPONSE_OK
//     */
//    @DeleteMapping("/{roomId}/{postId}")
//    public ResponseEntity<StatusResponse> deleteChatRoom(@PathVariable Long roomId,
//        @PathVariable Long postId, @AuthenticationPrincipal UserDetailsImpl userDetails) {
//        chatRoomService.deleteChatRoom(roomId, postId, userDetails.getUser());
//        return RESPONSE_OK;
//    }

    @GetMapping("/check/{storeId}")
    public ResponseEntity<CheckDto> checkRoomCondition(@PathVariable Long storeId) {
        CheckDto checkDto = chatRoomService.checkRoomCondition(storeId);
        return ResponseEntity.ok().body(checkDto);
    }
}
