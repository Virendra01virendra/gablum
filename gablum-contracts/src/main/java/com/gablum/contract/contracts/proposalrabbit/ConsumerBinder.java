package com.gablum.contract.contracts.proposalrabbit;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

public interface ConsumerBinder {
    @Input("proposalToUser")
    SubscribableChannel getChannel();
}
