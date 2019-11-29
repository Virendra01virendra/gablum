package com.gablum.auction.auctions.bid;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gablum.auction.auctions.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import java.text.DateFormat;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static com.gablum.auction.auctions.BidEvaluation.score;

@Slf4j
@Controller
public class BidController {

    @Autowired
    private SimpMessageSendingOperations messageSendingOperations;

    @Autowired
    private BidService bidService;

    @Autowired
    private AuctionService auctionService;


    // Getting score

    @MessageMapping("/bids.getscore")
    public String getBidScore(@Payload String message) throws JsonProcessingException {
        log.info("on /bids.getscore, message: " + message);
        Date d;
        DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        String dt = "12/02/2019";
        ParsePosition pp1 = new ParsePosition(0);
        d = formatter.parse(dt, pp1);

        ObjectMapper mapper = new ObjectMapper();
        Bid bid =  mapper.readValue(message, Bid.class);
//        float scorecnt = score(bid.getPrice(), bid.getTimeOfDelivery(), bid.getCreditPeriod(),
//                bid.isQaqcCertificate(),
//                bid.isTypeOfSupply(),
//                400, d, 12, true, true,
//                1, 1, 1, 1, 1);

//        messageSendingOperations.convertAndSend(
//                "/topic/getscore",
//                "Hellloooooooooo"
//        );
//        UUID id = UUID.fromString("3d5cb199-cc73-4831-8ce9-2894ee640472");
//        System.out.println("id is"+ id);
//        String msg = "heloooooo" + id;


        String id = "3d5cb199-cc73-4831-8ce9-2894ee640472";

        Auction auction = auctionService.getAuctionById(id);


        DateFormat formatter2 = new SimpleDateFormat("yyyy/MM/dd");
        String msg = "Hello" + formatter.parse(auction.getProposal().getDeliveryDate(),pp1);
        messageSendingOperations.convertAndSend(
                "/topic/getscore",
                msg
        );
        float scorecnt = score(bid.getPrice(), bid.getTimeOfDelivery(), bid.getCreditPeriod(),
                bid.isQaqcCertificate(), bid.isTypeOfSupply(),
                auction.getProposal().getPrice(),
                formatter2.parse(auction.getProposal().getDeliveryDate(),pp1), auction.getProposal().getCreditPeriod(),
                auction.getProposal().isQualityCertificate(), auction.getProposal().isMethodOfSupply(),
                auction.getProposal().getWeightPrice(), auction.getProposal().getWeightTimeOfDelivery(),
                auction.getProposal().getWeightCreditPeriod(), auction.getProposal().getWeightQaqcCertificate(),
                auction.getProposal().getWeightTypeOfDelivery()
        );
        String message1 = "Bid score is " + scorecnt;
        messageSendingOperations.convertAndSend(
                "/topic/getscore",
                message1
        );
        return message1;
    }


//    Adding bids

    @MessageMapping("/bids.addbid")
    public String addNewBid(@Payload String message) throws JsonProcessingException {
        log.info("on /bids.addbid, message: " + message);

        Date d;
        DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        String dt = "12/02/2019";
        ParsePosition pp1 = new ParsePosition(0);
        d = formatter.parse(dt, pp1);

        ObjectMapper mapper = new ObjectMapper();
        Bid bid =  mapper.readValue(message, Bid.class);
        float scorecnt = score(bid.getPrice(), bid.getTimeOfDelivery(), bid.getCreditPeriod(),
                bid.isQaqcCertificate(),
                bid.isTypeOfSupply(),
                400, d  , 12, true, true,
                1, 1, 1, 1, 1);

        BidDataEntity bidDataEntity = new BidDataEntity();
        bidDataEntity.setBid(bid);
        bidDataEntity.setScore(scorecnt);


        BidDataEntity bidDataEntity1 = bidService.addBid(bidDataEntity);

        System.out.println("Bid entity :::::"+bidDataEntity1);

        String message2 = "Bid is stored, and score is " + scorecnt;

        messageSendingOperations.convertAndSend(
                "/topic/newbid",
                message2
        );

        return message2;
    }


    //    fetching bids

    @MessageMapping("/bids.fetchbid")
    public String fetchBid(@Payload String message) throws JsonProcessingException {
        log.info("on /bids.fetchbid, message: " + message);


        String message3 = "List of bids \n";
        List<BidDataEntity> bidList = bidService.getBids();
        message3 = message3 + bidList;
        messageSendingOperations.convertAndSend(
                "/topic/fetchbid",
                message3
        );

        return message3;
    }



}