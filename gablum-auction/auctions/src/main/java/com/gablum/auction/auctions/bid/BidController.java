package com.gablum.auction.auctions.bid;


import com.gablum.auction.auctions.Bid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.text.DateFormat;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.gablum.auction.auctions.BidEvaluation.score;

@Slf4j
@Controller
public class BidController {

    @MessageMapping("/bids.addbid")
    @SendTo("/topic/newbid")
    public String addNewBid(@Payload String message) {
        log.info("on /bids.addbid, message: " + message);


        Date d;
        DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        String dt = "12/02/2019";
        ParsePosition pp1 = new ParsePosition(0);
        d = formatter.parse(dt, pp1);
        Bid bid = null;
        float scorecnt = score(bid.getPrice(), bid.getTimeOfDelivery(), bid.getCreditPeriod(),
                bid.isQaqcCertificate(),
                bid.isTypeOfSupply(),
                400, d, 12, true, true,
                1, 1, 1, 1, 1);
        message = message + scorecnt;
        return message;

    }
}