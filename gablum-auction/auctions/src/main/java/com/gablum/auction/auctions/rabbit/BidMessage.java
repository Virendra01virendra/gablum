package com.gablum.auction.auctions.rabbit;

import com.gablum.auction.auctions.Bid;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class BidMessage {
    private Bid bid;
    private String instanceId;
}
