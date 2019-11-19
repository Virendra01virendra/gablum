package com.gablum.auction.auctions;

import org.bson.types.ObjectId;

import java.util.List;
import java.util.UUID;

public interface IAuctionService {
    public List<Auction> getAllAuctions();

    public Auction getAuctionById(UUID auctionId);

    public List<Auction> addAuctions(List<Auction> auctionToAdd);
}
