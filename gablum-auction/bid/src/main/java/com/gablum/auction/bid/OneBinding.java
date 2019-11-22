package com.gablum.auction.bid;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

interface OneBinding {

    @Input("chn")
    public SubscribableChannel getChannel();
}