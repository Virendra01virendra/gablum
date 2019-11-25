package com.gablum.auction.auctions;


import com.gablum.auction.auctions.Auction;

import java.util.List;
import java.util.UUID;

public interface IAuctionService {
    List<Auction> getAllAuctions();

    Auction getAuctionById(UUID auctionId);

    List<Auction> addAuctions(List<Auction> auctionToAdd);

}
