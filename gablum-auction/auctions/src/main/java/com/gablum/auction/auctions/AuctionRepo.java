package com.gablum.auction.auctions;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface AuctionRepo extends MongoRepository<Auction, ObjectId> {

    public Optional<Auction> findByAuctionId(UUID auctionId);
}
