package com.gablum.auction.auctions;

import com.gablum.auction.auctions.services.UserService;
import io.jsonwebtoken.Claims;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;


@Slf4j
@RestController
public class AuctionController {

    @Autowired
    private AuctionService auctionService;


    Claims claims;

    @Autowired
    private SimpMessageSendingOperations messageSendingOperations;

    @Autowired
    private UserService userService;


    @GetMapping("/echo")
    public String getEcho() {
        messageSendingOperations.convertAndSend("/topic/newbid", "hello from the other side");
        return "auctions";
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
        return auctionService.getAllAuctions(queryMap);
    }

    @GetMapping("/auctions/{id}")
    public Auction getAuctionById(@PathVariable("id") String auctionId) {
        return auctionService.getAuctionById(auctionId);
    }

    @PostMapping("/auctions")
    public List<Auction> addAuctions(@RequestBody List<Auction> auctionsToAdd) {
        return auctionService.addAuctions(auctionsToAdd);
    }


}