package com.gablum.contract.contracts.repository;

import com.gablum.contract.contracts.model.Contracts;
//import org.bson.codecs.UuidCodec;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ContractDetailsRepository extends MongoRepository<Contracts, Integer> {
    Contracts findByContractId(UUID contractsId);
    List<Contracts> findByBuyerId(UUID buyerId);
}
