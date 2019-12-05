package com.gablum.auction.auctions.rabbit;

import com.gablum.auction.auctions.AuctionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;

@Slf4j
@EnableBinding(StartAuctionBinding.class)
public class AuctionListener {

    @Value("${eureka.instance.metadataMap.instanceId}")
    private String instanceId;

    private final SecureRandom random = new SecureRandom();
    private MessageDigest digest;

    @Autowired
    private AuctionService auctionService;

    @StreamListener("startAuction")
    public void startAuction(String auctionId) {
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        String link = auctionId;
        try {
            digest = MessageDigest.getInstance("SHA-256");
            link = digest.digest((link + salt.toString()).getBytes()).toString();
            log.warn("generated link: " + link);
        }
        catch (NoSuchAlgorithmException err) {
            link = link + salt.toString();
            log.error("cant generate hash, using link as: " + link);
        }
        auctionService.startAuction(auctionId, link);
    }

    @StreamListener("newBid")
    public void newBid(BidMessage message) {
        if (!message.getInstanceId().equals(instanceId)) {
            log.info("adding bids");
            //FIXME: send bids down the ws
        }
    }

}
