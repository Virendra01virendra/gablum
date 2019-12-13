package com.gablum.usermanagement.user.services;
import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.model.othermodels.*;
import com.gablum.usermanagement.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class MailService {
    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private UserRepository userRepository;

    public void sendEmail(String type, User user){
        SimpleMailMessage msg = new SimpleMailMessage();
        if (type == "registering"){
            msg.setTo(user.getEmail());
            msg.setSubject("User Email verification.");
            String text = "Hello "+user.getName()+", from "+user.getCompanyName()+".\n";
            text += "\nWelcome to Gablum!!\nThanks for choosing us for your business.";
            text += "\nGet started by logging in to your profile";
            text += "\n\nYou can now connect with businesses that best suit your expectations.\nIn case of " +
                    "any query you can connect with our support team once you login.";
            text += "\n\nSee you online.\n\nTeam Gablum.";
            msg.setText(text);
            try
            {
                javaMailSender.send(msg);
            } catch (MailException e){
                System.out.println("Wrong email provided");
                e.printStackTrace();
            }
        }
    }

    public void sendProposalEmail(String type, Proposal proposal) {
        SimpleMailMessage msg = new SimpleMailMessage();
        if(type == "newProposal") {
            msg.setTo(proposal.getCreatedBy());

            msg.setSubject("New Proposal Added");

            String textBuyer = "Thanks for floating a new proposal on Gablum.";
            textBuyer += "We hope to provide you with the best pool of suppliers inline with your proposal.\n";
            textBuyer += "\n\nProposal Details are : \n";
            textBuyer += "\nProduct Name : " + proposal.getProductName();
            textBuyer += "\nDomain : " + proposal.getBusinessDomain();
            textBuyer += "\nSubDomain : " + proposal.getBusinessSubDomain();
            textBuyer += "\nQuantity : " + proposal.getQuantityValue() + proposal.getQuantityUnit();
            textBuyer += "\nDelivery : " + proposal.getDeliveryDate();
            textBuyer += "\nRegistration Start Date : " + proposal.getRegStartDate();
            textBuyer += "\nAuction Start Date : " + proposal.getAuctionStartDate();
            textBuyer += "\n\nSimply visit your account dashboard if you wish to make changes to your floated proposal.";
            textBuyer += "\nTeam Gablum";
            msg.setText(textBuyer);

            try {
                javaMailSender.send(msg);
            } catch (MailException e) {
                System.out.println("Wrong email provided");
                e.printStackTrace();
            }

            List<User> subDomainUsers = new ArrayList<>(userRepository.findUserByBusinessSubDomain(proposal.getBusinessSubDomain()));
            for (int i=0; i<subDomainUsers.size(); i++){
                SimpleMailMessage msgForSeller = new SimpleMailMessage();
                msgForSeller.setTo(subDomainUsers.get(i).getEmail());

                msgForSeller.setSubject("New Proposal Added of " + proposal.getBusinessSubDomain() + " Busniess Sub Domain");

                String textSeller = "Hi " + subDomainUsers.get(i).getName();
                textSeller += "\n A new proposal has been floated which might be of your interest. Please, look at brief of the proposal below." +
                        "You can find more details in 'Active Proposal' in your dashboard and express interest.\n";
                textSeller += "\n\nProposal Details are : \n";
                textSeller += "\nProduct Name : " + proposal.getProductName();
                textSeller += "\nDomain : " + proposal.getBusinessDomain();
                textSeller += "\nSubDomain : " + proposal.getBusinessSubDomain();
                textSeller += "\nQuantity : " + proposal.getQuantityValue() + proposal.getQuantityUnit();
                textSeller += "\nDelivery : " + proposal.getDeliveryDate();
                textSeller += "\nRegistration Start Date : " + proposal.getRegStartDate();
                textSeller += "\nAuction Start Date : " + proposal.getAuctionStartDate();
                textSeller += "\n\nVisit your account dashboard if you wish to express interest in floated proposal.";
                textSeller += "\nTeam Gablum";
                msgForSeller.setText(textSeller);

                try {
                    javaMailSender.send(msgForSeller);
                } catch (MailException e) {
                    System.out.println("Wrong email provided");
                    e.printStackTrace();
                }
            }
        }
    }


    public void sendAuctionEmail(String type, Auction auction) {
        SimpleMailMessage msg = new SimpleMailMessage();
        if (type == "newAuction") {
            msg.setTo(auction.getCreatedBy());
            msg.setSubject("New Auction Floated");
            String textBuyer = "You have initialised a new Auction.\n";
            textBuyer += "We hope to provide you with the best pool of suppliers inline with your proposal.\n";
            textBuyer += "\n\nAuction Details are : ";
            textBuyer += "\nAuction name: "+auction.getAuctionName();
            textBuyer += "\nAuction ID: "+auction.getAuctionId();
            textBuyer += "\nAuction Start Date: "+auction.getAuctionStartDate();
            textBuyer += "\nAuction End Date: "+auction.getAuctionEndDate();
            textBuyer += "\nProduct Name: "+auction.proposal.getProductName();
            textBuyer += "\nCreated by: "+auction.getCreatedBy();
            textBuyer += "\n\nStay up to date while the auction runs and choose the bid of your" +
                    " choice to award the contract to the suitable supplier.\n";
            textBuyer += "Do read the instructions carefully before you award the contract.";
            textBuyer += "\n\nTeam Gablum.";
            msg.setText(textBuyer);
            try {
                javaMailSender.send(msg);
            } catch (MailException e) {
                System.out.println("Wrong email provided");
                e.printStackTrace();
            }
        }

            List<String> interestedUsersEmail = new ArrayList<String>();
            interestedUsersEmail = auction.getInterestedUsersEmail();

            for (int i=0; i<interestedUsersEmail.size(); i++){
                SimpleMailMessage msgInterestedUsers = new SimpleMailMessage();
                msgInterestedUsers.setText(interestedUsersEmail.get(i));
                msgInterestedUsers.setSubject("New Auction Generated");
                String textSeller = "\nNew Auction of your sub-domain has been generated";
                textSeller += "\n\nKeep up to date with the deadlines for the end of registration" +
                        " as well as the auction start and end dates.";
                textSeller += "\n\nAuction Details are : ";
                textSeller += "\nAuction name: "+auction.getAuctionName();
                textSeller += "\nAuction ID: "+auction.getAuctionId();
                textSeller += "\nAuction Start Date: "+auction.getAuctionStartDate();
                textSeller += "\nAuction End Date: "+auction.getAuctionEndDate();
                textSeller += "\nProduct Name: "+auction.proposal.getProductName();
                textSeller += "\nCreated by: "+auction.getCreatedBy();
                textSeller += "\n\nPlace your bids wisely.\nAll the best.\n";
                textSeller += "\n\nTeam Gablum";
                msgInterestedUsers.setText(textSeller);
                try
                {
                    javaMailSender.send(msgInterestedUsers);
                } catch (MailException e){
                    System.out.println("Wrong email provided");
                    e.printStackTrace();
                }
            }
        }

    public void sendBidEmail(String type, BidMessage bidMessage) {
        SimpleMailMessage msg = new SimpleMailMessage();
        if (type == "newBid"){
            BidDataEntity bidDataEntity = bidMessage.getBidDataEntity();
            msg.setTo(bidDataEntity.getCreatedBy());
            msg.setSubject("New Bid Placed");
            String textBidder = "You have placed a new bid. Watch your bid closely as you aim for" +
                    "the top spot.\nImprovise your bid score and settle yourself in appropriate" +
                    "bracket.";
            textBidder += "\nBid details are: ";
            textBidder += "Make the buyer an offer that's hard to refuse.";
            textBidder += "\n\nTeam Gablum";
            msg.setText(textBidder);
            try
            {
                javaMailSender.send(msg);
            } catch (MailException e){
                System.out.println("Wrong email provided");
                e.printStackTrace();
            }
        }
    }

    public void sendContractEmail(String type, Contracts contracts) {
        SimpleMailMessage msgB = new SimpleMailMessage();
        SimpleMailMessage msgS = new SimpleMailMessage();
        if (type == "newContracts") {
            msgS.setTo(contracts.getSellerEmail());
            msgS.setSubject("New Contract Awarded");
            String textSeller = "Congratulations! You have been awarded the contract with Contract Id " + contracts.getContractId();
            textSeller += "\nKindly abide by the clauses mentioned in the contract manual.";
            textSeller += "\nStay in touch and expand your outreach by connecting with businesses round the globe.";
            textSeller += "\n\n\n Team Gablum";
            msgS.setText(textSeller);
            msgB.setTo(contracts.getBuyerEmail());
            msgB.setSubject("New Contract awarded");
            String textBuyer = "Congratulations! you got a suitable supplier for your demand.";
            textBuyer += "\n\nTake a note that you need to e-sign the contract before you send it to the supplier.";
            textBuyer += "\n\nPlease go through the contract manual carefully, before you sign it.";
            textBuyer += "\n\n\nTeam Gablum";
            msgB.setText(textBuyer);
        }
    }
}
