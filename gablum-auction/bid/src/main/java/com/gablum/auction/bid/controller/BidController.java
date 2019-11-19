package com.gablum.auction.bid.controller;

import com.gablum.auction.bid.model.Bid;
import com.gablum.auction.bid.service.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BidController {
    @GetMapping("/echo")
    public String getEcho() {
        return "bids";
    }

    @Autowired
    private BidService bidService;

    @GetMapping("/bids")
    public List<Bid> getAllBids(){
        return bidService.getAllBids();
    }


}
