package com.gablum.proposals.proposal.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.UUID;

@Document
public class Proposal {

    private UUID proposalId;
    private UUID productId;
    private UUID createdBy;
    private UUID updatedBy;
    private enum domainName{Agriculture;};
    private enum subDomain{cd,ef,gf;};
    private Float price;
    private Date eod;
    private Date regStartDate;
    private Date regEndDate;
    private Date auctionStartDate;
    private Date auctionEndDate;
    private Date createdOn;
    private Date updatedOn;
    private int quantity;
    private int creditPeriod;
    private int thresholdParticipants;
    private int views;
    private int interested;
    private boolean qaqcCertificate;

    public Proposal(Float price, int quantity) {
        this.price = price;
        this.quantity = quantity;
    }

    public UUID getProposalId() {
        return proposalId;
    }

    public void setProposalId(UUID proposalId) {
        this.proposalId = proposalId;
    }

    public UUID getProductId() {
        return productId;
    }

    public void setProductId(UUID productId) {
        this.productId = productId;
    }

    public UUID getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(UUID createdBy) {
        this.createdBy = createdBy;
    }

    public UUID getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(UUID updatedBy) {
        this.updatedBy = updatedBy;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Date getEod() {
        return eod;
    }

    public void setEod(Date eod) {
        this.eod = eod;
    }

    public Date getRegStartDate() {
        return regStartDate;
    }

    public void setRegStartDate(Date regStartDate) {
        this.regStartDate = regStartDate;
    }

    public Date getRegEndDate() {
        return regEndDate;
    }

    public void setRegEndDate(Date regEndDate) {
        this.regEndDate = regEndDate;
    }

    public Date getAuctionStartDate() {
        return auctionStartDate;
    }

    public void setAuctionStartDate(Date auctionStartDate) {
        this.auctionStartDate = auctionStartDate;
    }

    public Date getAuctionEndDate() {
        return auctionEndDate;
    }

    public void setAuctionEndDate(Date auctionEndDate) {
        this.auctionEndDate = auctionEndDate;
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getCreditPeriod() {
        return creditPeriod;
    }

    public void setCreditPeriod(int creditPeriod) {
        this.creditPeriod = creditPeriod;
    }

    public int getThresholdParticipants() {
        return thresholdParticipants;
    }

    public void setThresholdParticipants(int thresholdParticipants) {
        this.thresholdParticipants = thresholdParticipants;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public int getInterested() {
        return interested;
    }

    public void setInterested(int interested) {
        this.interested = interested;
    }

    public boolean isQaqcCertificate() {
        return qaqcCertificate;
    }

    public void setQaqcCertificate(boolean qaqcCertificate) {
        this.qaqcCertificate = qaqcCertificate;
    }
}
