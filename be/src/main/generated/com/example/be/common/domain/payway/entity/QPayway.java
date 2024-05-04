package com.example.be.common.domain.payway.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QPayway is a Querydsl query type for Payway
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QPayway extends EntityPathBase<Payment> {

    private static final long serialVersionUID = 119300396L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QPayway payway = new QPayway("payway");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Long> payCnt = createNumber("payCnt", Long.class);

    public final EnumPath<PayType> payType = createEnum("payType", PayType.class);

    public final com.example.be.common.domain.store.entity.QStore store;

    public QPayway(String variable) {
        this(Payment.class, forVariable(variable), INITS);
    }

    public QPayway(Path<? extends Payment> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QPayway(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QPayway(PathMetadata metadata, PathInits inits) {
        this(Payment.class, metadata, inits);
    }

    public QPayway(Class<? extends Payment> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.store = inits.isInitialized("store") ? new com.example.be.common.domain.store.entity.QStore(forProperty("store")) : null;
    }

}

