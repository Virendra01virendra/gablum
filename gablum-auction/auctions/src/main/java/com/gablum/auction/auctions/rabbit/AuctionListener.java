package com.gablum.auction.auctions.rabbit;


import com.gablum.auction.auctions.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

@EnableBinding(StartAuctionBinding.class)
public class AuctionListener {

    @Autowired
    private AuctionService auctionService;

    @StreamListener("startAuction")
    public void startAuction(String auctionId) {
        auctionService.startAuction(auctionId);
    }

}
