package com.gablum.auction.auctions;

import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface AuctionRepo extends MongoRepository<Auction, ObjectId> {

    Optional<Auction> findByAuctionId(String auctionId);
    void deleteByAuctionId(String auctionId);
    Page<Auction> findAll(Pageable pageable);
    Page<Auction> findAllByCreatedBy(Pageable pageable, String email);

    Page<Auction> findAllByInterestedUsersEmailContaining(Pageable pageable, String email);
}
