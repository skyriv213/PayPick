package com.example.be.common.domain.store.repository;

import com.example.be.common.domain.store.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.RepositoryDefinition;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryDefinition(domainClass = Store.class, idClass = Long.class)
public interface StoreRepository extends JpaRepository<Store, Long>, StoreRepositoryCustom {

//    List<StoreResponseListDto> findAllStoreInMap(double leftX, double leftY, double rightX,
//        double rightY);


}
