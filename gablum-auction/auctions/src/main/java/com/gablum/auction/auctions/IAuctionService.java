package com.gablum.auction.auctions;

import org.bson.types.ObjectId;

import java.util.List;

public interface IAuctionService {
    public List<Auction> getAllAuctions();

    public Auction getAuctionById(ObjectId auctionId);

    public List<Auction> addAuctions(List<Auction> auctionToAdd);
}
