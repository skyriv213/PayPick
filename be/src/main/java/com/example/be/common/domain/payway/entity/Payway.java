package com.example.be.common.domain.payway.entity;


import com.example.be.common.domain.store.entity.Store;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "payways")
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Payway {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long payCnt;

    private PayType payType;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;



}
