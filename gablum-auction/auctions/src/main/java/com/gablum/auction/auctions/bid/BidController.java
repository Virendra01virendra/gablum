package com.gablum.auction.auctions.bid;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class BidController {

    @MessageMapping("/bids.addbid")
    @SendTo("/topic/newbid")
    public String addNewBid(@Payload String message) {
        System.out.println("hello from controller");
        return message;
    }
}
