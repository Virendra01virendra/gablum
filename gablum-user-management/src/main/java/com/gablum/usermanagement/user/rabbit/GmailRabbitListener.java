package com.gablum.usermanagement.user.rabbit;

import com.gablum.usermanagement.user.controller.MailController;
import com.gablum.usermanagement.user.model.othermodels.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

@EnableBinding(IGmailRabbit.class)
public class GmailRabbitListener {

    @Autowired
    private MailController mailController;

    @StreamListener("newProposal")
    public void newProposal(Proposal proposal){
        mailController.sendingProposalMail(proposal);
    }

    @StreamListener("newAuction")
    public void newAuction(Auction auction){
        mailController.sendingAuctionMail(auction);
    }

    @StreamListener("newBid")
    public void newBid(BidMessage bidMessage){
        mailController.sendingBidMail(bidMessage);
    }
}
