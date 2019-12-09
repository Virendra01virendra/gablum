package com.gablum.contract.contracts.model.othermodels;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
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
@NoArgsConstructor
@Document(collection = "proposals")
public class Proposal {
    @Id
    private String _id;
    private String proposalId = UUID.randomUUID().toString();
    private ProductDetails productDetails;
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
    private List<String> interestedUsersEmail = new ArrayList<>();
    private int priceWeight;
    private int creditPeriodWeight;
    private int deliveryDateWeight;
    private int methodOfSupplyWeight;
    private int qualityCertificationWeight;
}
