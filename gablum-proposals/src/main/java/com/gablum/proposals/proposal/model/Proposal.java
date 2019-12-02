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
    private int weightPrice;
    private int weightCreditPeriod;
    private int weightTimeOfDelivery;
    private int weightTypeOfDelivery;
    private int weightQaqcCertificate;

    public int getWeightPrice() {
        return weightPrice;
    }

    public void setWeightPrice(int weightPrice) {
        this.weightPrice = weightPrice;
    }

    public int getWeightCreditPeriod() {
        return weightCreditPeriod;
    }

    public void setWeightCreditPeriod(int weightCreditPeriod) {
        this.weightCreditPeriod = weightCreditPeriod;
    }

    public int getWeightTimeOfDelivery() {
        return weightTimeOfDelivery;
    }

    public void setWeightTimeOfDelivery(int weightTimeOfDelivery) {
        this.weightTimeOfDelivery = weightTimeOfDelivery;
    }

    public int getWeightTypeOfDelivery() {
        return weightTypeOfDelivery;
    }

    public void setWeightTypeOfDelivery(int weightTypeOfDelivery) {
        this.weightTypeOfDelivery = weightTypeOfDelivery;
    }

    public int getWeightQaqcCertificate() {
        return weightQaqcCertificate;
    }

    public void setWeightQaqcCertificate(int weightQaqcCertificate) {
        this.weightQaqcCertificate = weightQaqcCertificate;
    }

    //Empty constructor
    public Proposal() {
    }

    // Constructor
    public Proposal(Float price, int quantity) {
        this.price = price;
        this.quantity = quantity;
    }
}
