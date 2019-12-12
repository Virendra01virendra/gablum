package com.gablum.auction.auctions.rabbit;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.SubscribableChannel;

public interface StartAuctionBinding {

    @Output("newAuction")
    MessageChannel floatingNewAuctionMessageChannel();

    @Output("newBid")
    MessageChannel getNewBidTransmitChannel();

    @Output("newContract")
    MessageChannel awardContractChannel();

}
