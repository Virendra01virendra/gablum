package com.gablum.auction.auctions;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @GetMapping("/echo")
    public String getEcho() {
        return "auctions";
    }

    @GetMapping("/auctions")
    public List<Auction> getAllAuctions() {
        return auctionService.getAllAuctions();
    }

    @GetMapping("/auctions/{id}")
    public Auction getAuctionById(@PathVariable("id")ObjectId _id) {
        return auctionService.getAuctionById(_id);
    }

    @PostMapping("/auctions")
    public List<Auction> addAuctions(List<Auction> auctionsToAdd) {
        return auctionService.addAuctions(auctionsToAdd);
    }
}