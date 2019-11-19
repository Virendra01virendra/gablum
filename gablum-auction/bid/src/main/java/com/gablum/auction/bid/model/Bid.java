package com.gablum.auction.bid.model;

import java.util.Date;
import java.util.List;
import java.util.UUID;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import static com.gablum.auction.bid.BidEvaluation.score;

@Document
public class Bid {
    @Id
    private UUID bidId;
    private UUID participantId;
    private float score;
    private int price;
    private Date creditPeriod;
    private boolean qaqcCertificate;
    private boolean typeOfSupply;
    private Date timeOfDelivery;
    private List<String> productSpecList;
    private UUID auctionId;
    private Date createdOn;
    private Date updatedOn;


    public UUID getBidId() {
        return bidId;
    }

    public void setBidId(UUID bidId) {
        this.bidId = bidId;
    }

    public UUID getParticipantId() {
        return participantId;
    }

    public void setParticipantId(UUID participantId) {
        this.participantId = participantId;
    }

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Date getCreditPeriod() {
        return creditPeriod;
    }

    public void setCreditPeriod(Date creditPeriod) {
        this.creditPeriod = creditPeriod;
    }

    public boolean isQaqcCertificate() {
        return qaqcCertificate;
    }

    public void setQaqcCertificate(boolean qaqcCertificate) {
        this.qaqcCertificate = qaqcCertificate;
    }

    public boolean isTypeOfSupply() {
        return typeOfSupply;
    }

    public void setTypeOfSupply(boolean typeOfSupply) {
        this.typeOfSupply = typeOfSupply;
    }

    public Date getDeliveryDate() {
        return timeOfDelivery;
    }

    public void setDeliveryDate(Date deliveryDate) {
        this.timeOfDelivery = deliveryDate;
    }

    public List<String> getProductSpecList() {
        return productSpecList;
    }

    public void setProductSpecList(List<String> productSpecList) {
        this.productSpecList = productSpecList;
    }

    public UUID getAuctionId() {
        return auctionId;
    }

    public void setAuctionId(UUID auctionId) {
        this.auctionId = auctionId;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public Date getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }


    float priceSpec = 400;
    Date timeOfDeliverySpec = new Date(15);
    Date creditPeriodSpec = new Date(1);
    boolean qaqcCertificateSpec = true;
    boolean typeOfSupplySpec = true;

    float weightPriceSpec = 1;
    float weightTimeOfDeliverySpec = 1;
    float weightCreditPeriodSpec = 1;
    float weightQaqcCertificateSpec = 1;
    float weightTypeOfSupplySpec = 1;


    public Bid(UUID bidId, UUID participantId, float score, int price, Date creditPeriod, boolean qaqcCertificate,
               boolean typeOfSupply, Date deliveryDate, List<String> productSpecList, UUID auctionId, Date createdOn,
               Date updatedOn) {
        this.bidId = bidId;
        this.participantId = participantId;
        this.score = score(price, timeOfDelivery, creditPeriod, qaqcCertificate, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqcCertificateSpec, typeOfSupplySpec, weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificateSpec, weightTypeOfSupplySpec);
        this.price = price;
        this.creditPeriod = creditPeriod;
        this.qaqcCertificate = qaqcCertificate;
        this.typeOfSupply = typeOfSupply;
        this.timeOfDelivery = deliveryDate;
        this.productSpecList = productSpecList;
        this.auctionId = auctionId;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }
}
