package com.gablum.auction.auctions;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuctionController {

    @GetMapping("/echo")
    public String getEcho() {
        return "auctions";
    }
}