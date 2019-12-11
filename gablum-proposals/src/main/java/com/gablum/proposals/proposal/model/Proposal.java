package com.gablum.proposals.proposal.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Document(collection = "proposals")
public class Proposal {
    @Id
    private String _id;
    private String proposalId = UUID.randomUUID().toString();
    private ProductDetails productDetails;
    private String productName;
    private List <String> productSpecList;
    private String userID;
    private String productId;
    private String businessDomain;
    private String businessSubDomain;
    private String createdBy;
    private String updatedBy;
    private int quantityValue;
    private String quantityUnit;
    private float price;
    private Date deliveryDate;
    private int creditPeriod;
    private boolean qualityCertification;
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
    private List<String> invitedUsersEmail = new ArrayList<>();
    private List<String> interestedUsersEmail = new ArrayList<>();
    private int priceWeight;
    private int creditPeriodWeight;
    private int deliveryDateWeight;
    private int methodOfSupplyWeight;
    private int qualityCertificationWeight;
}