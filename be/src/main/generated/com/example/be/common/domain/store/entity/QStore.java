package com.example.be.common.domain.store.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QStore is a Querydsl query type for Store
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QStore extends EntityPathBase<Store> {

    private static final long serialVersionUID = 1745218276L;

    public static final QStore store = new QStore("store");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Double> latitude = createNumber("latitude", Double.class);

    public final NumberPath<Double> longitude = createNumber("longitude", Double.class);

    public final StringPath majorCategory = createString("majorCategory");

    public final StringPath middleCategory = createString("middleCategory");

    public final ListPath<com.example.be.common.domain.payway.entity.Payway, com.example.be.common.domain.payway.entity.QPayway> paywayList = this.<com.example.be.common.domain.payway.entity.Payway, com.example.be.common.domain.payway.entity.QPayway>createList("paywayList", com.example.be.common.domain.payway.entity.Payway.class, com.example.be.common.domain.payway.entity.QPayway.class, PathInits.DIRECT2);

    public final StringPath storeAddress = createString("storeAddress");

    public final StringPath storeName = createString("storeName");

    public QStore(String variable) {
        super(Store.class, forVariable(variable));
    }

    public QStore(Path<? extends Store> path) {
        super(path.getType(), path.getMetadata());
    }

    public QStore(PathMetadata metadata) {
        super(Store.class, metadata);
    }

}

