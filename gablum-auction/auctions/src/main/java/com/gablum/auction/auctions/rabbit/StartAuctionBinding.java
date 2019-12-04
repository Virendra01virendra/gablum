package com.gablum.auction.auctions.rabbit;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

public interface StartAuctionBinding {

    @Input("startAuction")
    SubscribableChannel getChannel();

}
