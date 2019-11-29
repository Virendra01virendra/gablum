package com.gablum.proposals.proposal.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.UUID;


@Getter
@Setter
@AllArgsConstructor
@Document(collection = "proposals")
public class Proposal {

    private UUID proposalId = UUID.randomUUID();
    private UUID productId;
    private String createdBy;
    private String updatedBy;
    private String businessDomain;
    private String businessSubDomain;
    private String productName;
    private int quantity;
    private float price;
    private Date deliveryDate;
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

    //Empty constructor
    public Proposal() {
    }

    // Constructor
    public Proposal(Float price, int quantity) {
        this.price = price;
        this.quantity = quantity;
    }
}
