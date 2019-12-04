package com.gablum.auction.auctions;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gablum.auction.auctions.services.UserService;
import io.jsonwebtoken.Claims;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import static com.gablum.auction.auctions.BidEvaluation.score;


@Slf4j
@RestController
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @Autowired
    private BidService bidService;


    Claims claims;

    @Autowired
    private UserService userService;

//    @GetMapping("/echo")
//    public String getEcho() {
//        messageSendingOperations.convertAndSend("/topic/newbid", "hello from the other side");
//        return "auctions";
//    }
    //FIXME: check roles before returning auction
    //FIXME: only allowed users (createdBy buyer/participating seller) can view details of auction
    @GetMapping("/auctions")
    @ResponseBody
    public List<Auction> getAllAuctions(
            @RequestParam Map<String, String> queryMap,
            HttpServletRequest request
    ) {
        String email = userService.getEmail(request);
        log.debug(email);
        return auctionService.getAllAuctionsBuyer(queryMap, email);
    }

    @GetMapping("/auctions/{id}")
    public Auction getAuctionById(@PathVariable("id") String auctionId) {
        return auctionService.getAuctionById(auctionId);
    }

    @PostMapping("/auctions")
    public List<Auction> addAuctions(@RequestBody List<Auction> auctionsToAdd) {
        return auctionService.addAuctions(auctionsToAdd);
    }

    @GetMapping("auctions/seller")
    public List<Auction> getAllAuctionSeller( @RequestParam Map<String, String> queryMap,
                                             HttpServletRequest request){
        String email = userService.getEmail(request);
        log.debug(email);

        return auctionService.getAuctionSeller(queryMap, email);

    }


    @PostMapping("bids/score")
    public String getBidScore(@RequestBody Bid bid) throws JsonProcessingException, ParseException {

        String id = "3d5cb199-cc73-4831-8ce9-2894ee640472";
        Auction auction = auctionService.getAuctionById(id);

        DateFormat formatter2 = new SimpleDateFormat("yyyy-MM-dd");
        Date d1 = new Date();
        String dt2 = auction.getProposal().getDeliveryDate();
        d1 = formatter2.parse(dt2);

        float pricespec = auction.getProposal().getPrice();
        Date timeOfDeliverySpec = d1;
        int creditPeriodSpec = auction.getProposal().getCreditPeriod();
        boolean qaqcCertificateSpec = auction.getProposal().isQualityCertificate();
        boolean typeOfSupplySpec = auction.getProposal().isMethodOfSupply();
        int weightPrice = auction.getProposal().getWeightPrice();
        int weightTimeOfDelivery = auction.getProposal().getWeightTimeOfDelivery();
        int weightCreditPeriod = auction.getProposal().getWeightCreditPeriod();
        int weightQaqc = auction.getProposal().getWeightQaqcCertificate();
        int weightTypeOfSupply = auction.getProposal().getWeightTypeOfDelivery();

        float scorecnt = score(bid.getPrice(), bid.getTimeOfDelivery(), bid.getCreditPeriod(),
                bid.isQaqcCertificate(),
                bid.isTypeOfSupply(),
                pricespec, timeOfDeliverySpec, creditPeriodSpec, qaqcCertificateSpec, typeOfSupplySpec,
                weightPrice, weightTimeOfDelivery, weightCreditPeriod, weightQaqc, weightTypeOfSupply);
        String message1 = "Bid score is " + scorecnt;

        return message1;
    }


    @PostMapping("auctions/{id}/bid")
    public String addNewBid(@RequestBody Bid bid, @PathVariable String id, HttpServletRequest request) throws JsonProcessingException,
            ParseException {

        String email = userService.getEmail(request);

//        id = "3d5cb199-cc73-4831-8ce9-2894ee640472";
        Auction auction = auctionService.getAuctionById(id);

        DateFormat formatter2 = new SimpleDateFormat("yyyy-MM-dd");
        Date d1 = new Date();
        String dt2 = auction.getProposal().getDeliveryDate();
        d1 = formatter2.parse(dt2);

        float pricespec = auction.getProposal().getPrice();
        Date timeOfDeliverySpec = d1;
        int creditPeriodSpec = auction.getProposal().getCreditPeriod();
        boolean qaqcCertificateSpec = auction.getProposal().isQualityCertificate();
        boolean typeOfSupplySpec = auction.getProposal().isMethodOfSupply();
        int weightPrice = auction.getProposal().getWeightPrice();
        int weightTimeOfDelivery = auction.getProposal().getWeightTimeOfDelivery();
        int weightCreditPeriod = auction.getProposal().getWeightCreditPeriod();
        int weightQaqc = auction.getProposal().getWeightQaqcCertificate();
        int weightTypeOfSupply = auction.getProposal().getWeightTypeOfDelivery();

        float scorecnt = score(bid.getPrice(), bid.getTimeOfDelivery(), bid.getCreditPeriod(),
                bid.isQaqcCertificate(),
                bid.isTypeOfSupply(),
                pricespec, timeOfDeliverySpec, creditPeriodSpec, qaqcCertificateSpec, typeOfSupplySpec,
                weightPrice, weightTimeOfDelivery, weightCreditPeriod, weightQaqc, weightTypeOfSupply);

        BidDataEntity bidDataEntity = new BidDataEntity();
        bidDataEntity.setBid(bid);
        bidDataEntity.setScore(scorecnt);
        bidDataEntity.setCreatedBy(email);

        bidService.addBid(bidDataEntity);


        String message2 = "Bid is stored, and score is " + scorecnt;

        return message2;
    }



}
