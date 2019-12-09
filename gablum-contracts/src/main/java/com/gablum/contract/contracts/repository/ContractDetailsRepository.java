package com.gablum.contract.contracts.repository;

import com.gablum.contract.contracts.model.Contracts;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ContractDetailsRepository extends MongoRepository<Contracts, Integer> {
    Contracts findByContractId(String contractsId);
    List<Contracts> findByBuyerId(String buyerId);
    List<Contracts> findBySellerId(String sellerId);
    Contracts findByAuctionId(String auctionId);
    Contracts findByBidId(String bidId);
}
