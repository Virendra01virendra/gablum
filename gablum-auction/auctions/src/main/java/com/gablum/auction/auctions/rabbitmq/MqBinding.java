package com.gablum.auction.auctions.rabbitmq;


import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface MqBinding {

    @Output("bid-out-channel")
    public MessageChannel getBidOutChannel();
}
