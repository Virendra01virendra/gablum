package com.gablum.contract.contracts.model;

import com.gablum.contract.contracts.model.othermodels.Auction;
import com.gablum.contract.contracts.model.othermodels.Bid;
import com.gablum.contract.contracts.model.othermodels.User;
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
    private String contractId;

    @NotNull
    private Auction auctionDetails;

    @NotNull
    private Bid BidDetails;

    @NotNull
    private User buyer;

    @NotNull
    private String buyerESign;

    @NotNull
    private String sellerESign;

    @NotNull
    private User sellerId;

    @NotNull
    private Boolean contractStatus = true;
}
