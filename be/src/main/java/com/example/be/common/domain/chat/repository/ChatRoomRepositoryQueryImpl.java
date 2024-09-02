package com.example.be.common.domain.chat.repository;
import static com.example.be.common.domain.chat.entity.QChatRoom.chatRoom;

import com.example.be.common.domain.chat.dtos.ChatDto;
import com.example.be.common.domain.chat.dtos.ChatRoomDto;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class ChatRoomRepositoryQueryImpl implements ChatRoomRepositoryQuery{

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<ChatDto> getChatRoom(Long storeId) {
//        return jpaQueryFactory.select(
//            Projections.constructor(ChatRoomDto.class,
//                chatRoom.id
//                )
//        )
        return List.of();
    }
//
//    @Override
//    public List<ChatRoomDto> findAllByUserQuery(User user) {
//        return jpaQueryFactory.select(
//                Projections.constructor(ChatRoomDto.class,
//                    chatRoom.id,
//                    chatRoom.chatRoomTitle
//                ))
//            .from(userChatRoom)
//            .join(userChatRoom.chatRoom, chatRoom)
//            .where(userChatRoom.user.eq(user))
//            .fetch();
////        return null;
//    }

}
