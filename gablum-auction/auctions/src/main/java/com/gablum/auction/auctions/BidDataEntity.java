package com.gablum.auction.auctions;

import org.springframework.data.annotation.Id;

import java.util.UUID;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;

@Document("Bids")
@Getter @Setter @AllArgsConstructor @ToString @NoArgsConstructor
public class BidDataEntity {

    @Id
    @NotNull
    private String bidId = UUID.randomUUID().toString();

    @NotNull
    private UUID auctionId;

    @NotNull
    private UUID userId;

    @NotNull
    private Bid bid;

    private float score;



}
