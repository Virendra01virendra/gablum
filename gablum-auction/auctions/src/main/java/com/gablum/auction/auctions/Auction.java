package com.gablum.auction.auctions;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.AccessLevel;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@ToString
@Document(collection = "auctions")
public class Auction {

    @Id
    private String _id;

    @Indexed(unique = true)
    @Setter(AccessLevel.NONE)
    private String auctionId = UUID.randomUUID().toString();
    private String uniqueLink;
//    private UUID proposalId;
    private String auctionName;
    private Proposal proposal;
    boolean isAuctionActive;
    boolean isAuctionFinished;

    private String participantsVerificationId;
    private List<String> selectedParticipantList; // usernames
    private List<String> interestedUsersEmail;
    private String winningBid;

    private HashMap<String, String> socketTokens;


    private Date createdOn;
    private Date updatedOn;

    private String createdBy; // username
    private String updatedBy; // username

    private Date auctionStartDate;
    private Date auctionEndDate;

}