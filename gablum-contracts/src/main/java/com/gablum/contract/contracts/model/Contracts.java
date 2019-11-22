package com.gablum.contract.contracts.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Document("Contracts")
@Getter @Setter @AllArgsConstructor @ToString @NoArgsConstructor
public class Contracts {
//    @Indexed(unique = true)
    @Id
    @NotNull
    private UUID contractId;

    @NotNull
    private Auction auctionDetails;

    @NotNull
    private Object BidDetails;

    @NotNull
    private Object auctionHostDetails;

    @NotNull
    private Object auctionGuestDetails;

    @NotNull
    private Boolean contractStatus = true;
}
