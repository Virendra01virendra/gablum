package com.gablum.proposals.proposal.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;


@Getter
@Setter
@AllArgsConstructor
@Document(collection = "proposals")
public class Proposal {
    @Id
    private String _id;
    private String proposalId = UUID.randomUUID().toString();
    private UUID productId;
    private String createdBy;
    private String updatedBy;
    private String businessDomain;
    private String businessSubDomain;
    private String productName;
    private int quantityValue;
    private String quantityUnit;
    private float price;
    private Date deliveryDate;
    private String creditPeriod;
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
<<<<<<< HEAD
    private int priceWeight;
    private int creditPeriodWeight;
    private int deliveryDateWeight;
    private int methodOfSupplyWeight;
    private int qualityCertificationWeight;
=======
    private List<String> interestedUsersEmail = new ArrayList<>();

//    public void setInterestedUsersEmail(String interestedUsersEmail) {
//        this.interestedUsersEmail.add(interestedUsersEmail);
//    }

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
>>>>>>> 44a07d6c592662a883b0b93310822cd6aa744386

    //Empty constructor
    public Proposal() {
    }

   
}
