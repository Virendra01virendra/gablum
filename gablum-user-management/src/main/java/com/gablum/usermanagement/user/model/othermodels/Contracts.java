package com.gablum.usermanagement.user.model.othermodels;

import com.gablum.usermanagement.user.model.User;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Document("Contracts")
@Getter @Setter @AllArgsConstructor @ToString @NoArgsConstructor
public class Contracts {
    @Id
    private String _id;

    @NotNull
    private String contractId = UUID.randomUUID().toString();

    @NotNull
    private String auctionId;

    @NotNull
    private String bidId;

    @NotNull
    private Auction auctionDetails;

    @NotNull
    private Bid BidDetails;

    @NotNull
    private String buyerId;

    @NotNull
    private User buyer;

    @NotNull
    private String buyerESign;

    @NotNull
    private String sellerESign;

    @NotNull
    private String sellerId;

    @NotNull
    private User seller;

    @NotNull
    private Boolean contractStatus = true;
}
