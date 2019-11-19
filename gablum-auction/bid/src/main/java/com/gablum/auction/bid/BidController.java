package com.gablum.auction.bid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BidController {
    @Autowired
    private BidService bidService;

    @GetMapping("/echo")
    public String getEcho() {
        return "bids";
    }


    @GetMapping("/bids")
    public List<Bid> getAllBids(){
        return bidService.getAllBids();
    }


}
