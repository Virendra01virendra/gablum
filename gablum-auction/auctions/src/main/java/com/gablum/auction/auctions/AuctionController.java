package com.gablum.auction.auctions;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.springframework.messaging.simp.SimpMessageSendingOperations;

@RestController
@CrossOrigin(origins = "localhost:4200")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    Claims claims;

    @Autowired
    private SimpMessageSendingOperations messageSendingOperations;

    @GetMapping("/echo")
    public String getEcho() {
        messageSendingOperations.convertAndSend("/topic/newbid", "hello from the other side");
        return "auctions";
    }

    @GetMapping("/auctions")
    public List<Auction> getAllAuctions(
            @RequestParam Map<String, String> queryMap,
            @RequestHeader("Authorization") String token
    ) {
        JwtParser parser = Jwts.parser();
        claims = parser.parseClaimsJwt(token).getBody();
        System.out.println(claims);
        return auctionService.getAllAuctions(queryMap);
    }

    @GetMapping("/auctions/{id}")
    public Auction getAuctionById(@PathVariable("id") UUID auctionId) {
        return auctionService.getAuctionById(auctionId);
    }

    @PostMapping("/auctions")
    public List<Auction> addAuctions(@RequestBody List<Auction> auctionsToAdd) {
        return auctionService.addAuctions(auctionsToAdd);
    }
}