package com.gablum.proposals.proposal.interfaces;

//import org.springframework.cloud.stream.annotation.Input;
import org.springframework.cloud.stream.annotation.Output;
//import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
//import org.springframework.messaging.SubscribableChannel;

public interface ProposalInterfaceRabbit {

    @Output("newProposal")
    MessageChannel newProposalMessageChannel();
}
