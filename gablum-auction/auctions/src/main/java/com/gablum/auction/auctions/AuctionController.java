package com.gablum.auction.auctions;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.gablum.auction.auctions.rabbit.BidMessage;
import com.gablum.auction.auctions.rabbit.StartAuctionBinding;
import com.gablum.auction.auctions.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @Autowired
    private BidService bidService;

    @Autowired
    private UserService userService;

    private MessageChannel messageChannel;

    public AuctionController(StartAuctionBinding auctionBinding) {
        this.messageChannel = auctionBinding.getNewBidTransmitChannel();
    }

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
        List<Auction> auctionList = new ArrayList<Auction>();
        auctionList.addAll(auctionService.getAllAuctionsBuyer(queryMap, email));
        auctionList.addAll(auctionService.getAuctionSeller(queryMap, email));
        return auctionList;
    }

    @GetMapping("/auctions/{id}")
    public Auction getAuctionById(@PathVariable("id") String auctionId) {
        return auctionService.getAuctionById(auctionId);
    }

    @PostMapping("/auctions")
    public List<Auction> addAuctions(@RequestBody List<Auction> auctionsToAdd, HttpServletRequest request) {
        int i = 0;
        String email = userService.getEmail(request);
        while (i < auctionsToAdd.size()){
            auctionsToAdd.get(i).setCreatedBy(email);
            i = i+1;
            System.out.println("email---------->" + email);
        }
        return auctionService.addAuctions(auctionsToAdd);
    }

    @GetMapping("auctions/seller")
    public List<Auction> getAllAuctionSeller( @RequestParam Map<String, String> queryMap,
                                             HttpServletRequest request){
        String email = userService.getEmail(request);
        log.debug(email);

        return auctionService.getAuctionSeller(queryMap, email);

    }


    @PostMapping("auctions/{id}/bid/score")
    public ScoreObject getBidScore(@RequestBody Bid bid, @PathVariable String id) throws ParseException {
        ScoreObject scoreObject = new ScoreObject();
        scoreObject.setScore(bidService.getBidScore(bid, id));
        return scoreObject;
    }


    @PostMapping("auctions/{id}/bid")
    public ScoreObject addNewBid(@RequestBody Bid bid, @PathVariable String id, HttpServletRequest request) throws JsonProcessingException,
            ParseException, UnknownHostException {
        String email = userService.getEmail(request);
        float scorecnt = bidService.getBidScore(bid, id);
        BidDataEntity bidDataEntity = new BidDataEntity();
        bidDataEntity.setBid(bid);
        bidDataEntity.setScore(scorecnt);
        bidDataEntity.setCreatedBy(email);
        bidDataEntity.setAuctionId(id);

        bidService.addBid(bidDataEntity);

        Message<BidMessage> message = MessageBuilder.withPayload(
                new BidMessage(bid, InetAddress.getLocalHost().getHostAddress())
        ).build();

        messageChannel.send(message);

        ScoreObject scoreObject = new ScoreObject();
        scoreObject.setScore(scorecnt);
        return scoreObject;
    }


//    @GetMapping("auctions/{id}/bid")
//    public List<BidDataEntity>  getBids(@PathVariable String id) {
//        List<BidDataEntity> bidDataEntityList = auct
//    }

}
