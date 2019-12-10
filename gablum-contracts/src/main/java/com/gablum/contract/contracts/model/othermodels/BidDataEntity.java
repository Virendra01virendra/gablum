package com.gablum.contract.contracts.model.othermodels;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document("Bids")
@Getter @Setter @AllArgsConstructor @ToString @NoArgsConstructor
public class BidDataEntity {

    private String bidId = UUID.randomUUID().toString();

    private String auctionId;

    private String userId;

    private Bid bid;

    private float score;

    private String createdBy;



}
