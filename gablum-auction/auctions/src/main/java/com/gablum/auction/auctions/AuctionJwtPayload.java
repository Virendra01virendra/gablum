package com.gablum.auction.auctions;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class AuctionJwtPayload {
    private String sub;
    private String auctionId;
    private boolean isOwner;
    private long iat;
    private long expiry;
}
