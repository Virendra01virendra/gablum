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

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
