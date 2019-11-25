package com.gablum.auction.auctions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


import org.springframework.messaging.simp.SimpMessageSendingOperations;


@RestController
@CrossOrigin(origins = "*")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @Autowired
    private SimpMessageSendingOperations messageSendingOperations;


    @GetMapping("/echo")
    public String getEcho() {
        messageSendingOperations.convertAndSend("/topic/newbid", "hello from the other side");
        return "auctions";
    }

    @GetMapping("/auctions")
    public List<Auction> getAllAuctions() {
        return auctionService.getAllAuctions();
    }

    @GetMapping("/auctions/{id}")
    public Auction getAuctionById(@PathVariable("id") UUID auctionId) {
        return auctionService.getAuctionById(auctionId);
    }

    @PostMapping("/auctions")
    public List<Auction> addAuctions(@RequestBody List<Auction> auctionsToAdd) {
        return auctionService.addAuctions(auctionsToAdd);
    }


}