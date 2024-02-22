package com.example.be.common.domain.store.entity;

import com.example.be.common.domain.payway.entity.Payway;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
@Table(name = "store")
public class Store {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "int")
    private Long id;

    private String storeName;

    private String majorCategory;

    private String middleCategory;

    private String storeAddress;

    //위도 ----
    private float latitude;

    //경도 ||||
    private float longitude;

    @OneToMany(mappedBy = "store")
    @Builder.Default
    private List<Payway> paywayList = new ArrayList<>();

}
