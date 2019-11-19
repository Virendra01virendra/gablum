package com.gablum.contract.contracts.repository;

import com.gablum.contract.contracts.model.Contracts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface ContractDetailsRepository extends MongoRepository<Contracts, Integer> {
    public Contracts findByContractsId(UUID contractsId);
}
