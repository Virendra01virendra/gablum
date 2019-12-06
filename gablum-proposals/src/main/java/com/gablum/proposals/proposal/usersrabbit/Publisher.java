package com.gablum.proposals.proposal.usersrabbit;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface Publisher {
    @Output("proposalToUser")
    public MessageChannel getChannel();
}

