package com.gablum.auction.auctions;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;


import org.springframework.messaging.simp.SimpMessageSendingOperations;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;


@RestController
@CrossOrigin(origins = "*")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;


    private String tokenParser(HttpServletRequest req) {
        String bearerToken = null;
        try {
            Cookie[] cookies = req.getCookies();
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("Authorization")) {
                    bearerToken = cookie.getValue();
                }
            }
            return bearerToken;
        } catch (Exception ex) {
            return null;
        }
    }

    Claims claims;

    @Autowired
    private SimpMessageSendingOperations messageSendingOperations;


    @GetMapping("/echo")
    public String getEcho() {
        messageSendingOperations.convertAndSend("/topic/newbid", "hello from the other side");
        return "auctions";
    }

    @GetMapping("/auctions")
    @ResponseBody
    public List<Auction> getAllAuctions(
            @RequestParam Map<String, String> queryMap,
            HttpServletRequest request
    ) {
//        System.out.println("\n\n" + request.getHeader("Cookie") + "\n\n");
//        String token = tokenParser(request);
//        System.out.println("\n\n" + request.getCookies() + "\n\n");
//        JwtParser parser = Jwts.parser();
//        claims = parser.parseClaimsJwt(token).getBody();
//        System.out.println(claims);
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