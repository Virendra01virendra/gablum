package com.gablum.auction.auctions;

import com.gablum.auction.auctions.Auction;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface AuctionRepo extends MongoRepository<Auction, ObjectId> {

    Optional<Auction> findByAuctionId(UUID auctionId);
    void deleteByAuctionId(UUID auctionId);
}
