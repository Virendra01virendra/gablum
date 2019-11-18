package com.gablum.auction.auctions;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@ToString
@Document(collection = "auctions")
public class Auction {
    @Id
    private ObjectId _id;

    @Indexed(unique = true)
    private long auctionId;
    private long proposalId;

    private long participantsVerificationId;
    private List<Long> selectedParticipantList;
    private List<Long> bidIdList;

    private Date createdOn;
    private Date updatedOn;

    private long createdBy;
    private long updatedBy;

    private Date auctionStartDate;
    private Date auctionEndDate;

}