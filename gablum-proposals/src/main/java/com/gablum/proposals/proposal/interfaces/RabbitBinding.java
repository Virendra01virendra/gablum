package com.gablum.proposals.proposal.interfaces;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface RabbitBinding {

    @Output("buyer")
    MessageChannel getChannel();
}
