package com.gablum.auction.auctions.bid;


import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Slf4j
@Controller
public class BidController {

    @MessageMapping("/bids.addbid")
    @SendTo("/topic/newbid")
    public String addNewBid(@Payload String message) {
        log.info("on /bids.addbid, message: " + message);
        return message;
    }
}
