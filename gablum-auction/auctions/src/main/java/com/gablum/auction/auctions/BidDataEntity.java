package com.gablum.auction.auctions;

import org.springframework.data.annotation.Id;

import java.util.UUID;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;

@Document("Bids")
@Getter @Setter @AllArgsConstructor @ToString @NoArgsConstructor
public class BidDataEntity {

    private String bidId = UUID.randomUUID().toString();

    private String auctionId;

    private String userId;

    private Bid bid;

    private float score;



}
