package com.gablum.auction.auctions.rabbit;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.SubscribableChannel;

public interface StartAuctionBinding {

    @Input("startAuction")
    SubscribableChannel getStartChannel();

    @Input("newBid")
    SubscribableChannel getNewbidChannel();

    @Output("newBid")
    MessageChannel getNewBidTransmitChannel();

}
