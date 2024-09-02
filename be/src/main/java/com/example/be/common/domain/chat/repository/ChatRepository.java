package com.example.be.common.domain.chat.repository;
import com.example.be.common.domain.chat.entity.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChatRepository extends JpaRepository<Chat,Long>, ChatRepositoryQuery {

}
