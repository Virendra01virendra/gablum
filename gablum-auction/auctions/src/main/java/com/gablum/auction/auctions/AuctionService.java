package com.gablum.auction.auctions;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionService implements IAuctionService{

    @Autowired
    private AuctionRepo auctionRepo;

    @Override
    public List<Auction> getAllAuctions() {
        return auctionRepo.findAll();
    }

    @Override
    public Auction getAuctionById(ObjectId auctionId) {
        return auctionRepo.findById(auctionId).orElse(null);
    }

    @Override
    public List<Auction> addAuctions(List<Auction> auctionToAdd) {
        return auctionRepo.saveAll(auctionToAdd);
    }
}
