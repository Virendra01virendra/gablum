package com.gablum.usermanagement.user.rabbit;

import com.gablum.usermanagement.user.controller.MailController;
import com.gablum.usermanagement.user.model.othermodels.Auction;
import com.gablum.usermanagement.user.model.othermodels.Contracts;
import com.gablum.usermanagement.user.model.othermodels.Proposal;
import com.gablum.usermanagement.user.model.othermodels.BidMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

@Slf4j
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

    @StreamListener()
    public void newContract(Contracts contracts){
        log.warn("sending contracts" + contracts.toString());
        mailController.sendingContract(contracts);
    }
}
