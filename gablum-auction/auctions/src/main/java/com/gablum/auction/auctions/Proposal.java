package com.gablum.auction.auctions;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@ToString
public class Proposal {
    private UUID proposalId=UUID.randomUUID();
    private UUID productId;
    private String createdBy;
    private String updatedBy;
    private String businessDomain;
    private String businessSubDomain;
    private String productName;
    private int quantity;
    private Float price;
    private String deliveryDate;
    private int creditPeriod;
    private boolean qualityCertificate;
    private boolean methodOfSupply;
    private Date regStartDate;
    private Date regEndDate;
    private Date auctionStartDate;
    private Date auctionEndDate;
    private Date createdOn;
    private Date updatedOn;
    private int thresholdParticipants;
    private int views;
    private int interested;
    private List<String> interestedUsersEmail = new ArrayList<>();
    private int weightPrice;
    private int weightCreditPeriod;
    private int weightTimeOfDelivery;
    private int weightTypeOfDelivery;
    private int weightQaqcCertificate;


}
