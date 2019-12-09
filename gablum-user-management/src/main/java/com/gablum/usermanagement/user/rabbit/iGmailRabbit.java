package com.gablum.usermanagement.user.rabbit;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

public interface iGmailRabbit {

    @Input
    SubscribableChannel newProposalFloated();

    @Input
    SubscribableChannel newBidPlaced();
}
