package com.gablum.auction.auctions;


import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface IAuctionService {
    List<Auction> getAllAuctions(Map<String, String> queryparam);

    Auction getAuctionById(String auctionId);

    List<Auction> addAuctions(List<Auction> auctionToAdd);

}
