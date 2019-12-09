package com.gablum.usermanagement.user.model.othermodels;

import lombok.*;
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

    @Indexed(unique = true)
    @Setter(AccessLevel.NONE)
    private String auctionId = UUID.randomUUID().toString();
    private String uniqueLink;
//    private UUID proposalId;
    private String auctionName;
    private Proposal proposal;
    boolean isAuctionActive;

    private String participantsVerificationId;
    private List<String> selectedParticipantList; // usernames
    private List<String> interestedUsersEmail;
    private List<String> bidIdList;

    private HashMap<String, String> socketTokens;


    private Date createdOn;
    private Date updatedOn;

    private String createdBy; // username
    private String updatedBy; // username

    private Date auctionStartDate;
    private Date auctionEndDate;

}