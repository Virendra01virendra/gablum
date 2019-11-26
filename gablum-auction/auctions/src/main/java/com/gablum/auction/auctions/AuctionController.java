package com.gablum.auction.auctions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static com.gablum.auction.auctions.BidEvaluation.score;


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

    @PostMapping("/auctions/bid")
    public float score1(@RequestBody Bid bid) {
        Date d;
        DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        String dt = "12/02/2019";
        ParsePosition pp1 = new ParsePosition(0);
        d = formatter.parse(dt, pp1);
        return score(bid.getPrice(), bid.getTimeOfDelivery(), bid.getCreditPeriod(), bid.isQaqcCertificate(),
                bid.isTypeOfSupply(),
                400, d,12, true, true,
                1,1,1,1,1);
    }


}