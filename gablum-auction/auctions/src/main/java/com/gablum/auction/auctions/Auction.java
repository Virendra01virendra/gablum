package com.gablum.auction.auctions;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.AccessLevel;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@ToString
@Document(collection = "auctions")
public class Auction {
    @Id
    private ObjectId _id;

    @Indexed(unique = true)
    @Setter(AccessLevel.NONE)
    private UUID auctionId = UUID.randomUUID();
    private UUID proposalId;

    boolean auctionStatus;

    private UUID participantsVerificationId;
    private List<UUID> selectedParticipantList;
    private List<UUID> bidIdList;

    private Date createdOn;
    private Date updatedOn;

    private UUID createdBy;
    private UUID updatedBy;

    private Date auctionStartDate;
    private Date auctionEndDate;

}