package com.gablum.usermanagement.user.services;

import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.model.othermodels.Auction;
import com.gablum.usermanagement.user.model.othermodels.Proposal;
import com.gablum.usermanagement.user.model.othermodels.BidMessage;
import com.gablum.usermanagement.user.model.othermodels.BidDataEntity;
import com.gablum.usermanagement.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

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
            textBuyer += "\n<h3>Product Name : </h3>" + proposal.getProductName();
            textBuyer += "\n<h3>Domain : </h3>" + proposal.getBusinessDomain();
            textBuyer += "\n<h3>SubDomain : </h3>" + proposal.getBusinessSubDomain();
            textBuyer += "\n<h3>Quantity : </h3>" + proposal.getQuantityValue() + proposal.getQuantityUnit();
            textBuyer += "\n<h3>Delivery : </h3>" + proposal.getDeliveryDate();
            textBuyer += "\n<h3>Registration Start Date : </h3>" + proposal.getRegStartDate();
            textBuyer += "\n<h3>Auction Start Date : </h3>" + proposal.getAuctionStartDate();
            textBuyer += "\n\nSimply visit your account dashboard if you wish to make changes to your floated proposal.";
            textBuyer += "\nTeam Gablum";
            msg.setText(textBuyer);

            try {
                javaMailSender.send(msg);
            } catch (MailException e) {
                System.out.println("Wrong email provided");
                e.printStackTrace();
            }
            SimpleMailMessage msgForSeller = new SimpleMailMessage();
            List<User> subDomainUsers = new ArrayList<>(userRepository.findUserByBusinessSubDomain(proposal.getBusinessSubDomain()));
            for (int i=0; i<subDomainUsers.size(); i++){
                msgForSeller.setTo(subDomainUsers.get(i).getEmail());

                msgForSeller.setSubject("New Proposal Added of " + proposal.getBusinessSubDomain() + " Busniess Sub Domain");

                String textSeller = "Hi " + subDomainUsers.get(i).getName();
                textSeller += "\n A new proposal has been floated which might be of your interest. Please, look at brief of the proposal below." +
                        "You can find more details in 'Active Proposal' in your dashboard and express interest.\n";
                textSeller += "\n\nProposal Details are : \n";
                textSeller += "\n<h3>Product Name : </h3>" + proposal.getProductName();
                textSeller += "\n<h3>Domain : </h3>" + proposal.getBusinessDomain();
                textSeller += "\n<h3>SubDomain : </h3>" + proposal.getBusinessSubDomain();
                textSeller += "\n<h3>Quantity : </h3>" + proposal.getQuantityValue() + proposal.getQuantityUnit();
                textSeller += "\n<h3>Delivery : </h3>" + proposal.getDeliveryDate();
                textSeller += "\n<h3>Registration Start Date : </h3>" + proposal.getRegStartDate();
                textSeller += "\n<h3>Auction Start Date : </h3>" + proposal.getAuctionStartDate();
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
        if (type == "newAuction"){
            msg.setTo(auction.getCreatedBy());
            msg.setSubject("New Auction Floated");
            String text = "You have added a new Auction";
            msg.setText(text);
            try
            {
                javaMailSender.send(msg);
            } catch (MailException e){
                System.out.println("Wrong email provided");
                e.printStackTrace();
            }

            List<String> interestedUsersEmail = new ArrayList<String>();
            interestedUsersEmail = auction.getInterestedUsersEmail();

            for (int i=0; i<interestedUsersEmail.size(); i++){
                SimpleMailMessage msgInterestedUsers = new SimpleMailMessage();
                msgInterestedUsers.setText(interestedUsersEmail.get(i));
                msgInterestedUsers.setSubject("New Auction Floated");
                text = "New Auction of your interested has been floated";
                msgInterestedUsers.setText(text);
                try
                {
                    javaMailSender.send(msgInterestedUsers);
                } catch (MailException e){
                    System.out.println("Wrong email provided");
                    e.printStackTrace();
                }
            }
        }
    }

    public void sendBidEmail(String type, BidMessage bidMessage) {
        SimpleMailMessage msg = new SimpleMailMessage();
        if (type == "newBid"){
            BidDataEntity bidDataEntity = bidMessage.getBidDataEntity();
            msg.setTo(bidDataEntity.getCreatedBy());
            msg.setSubject("New Bid Placed");
            String text = "you have placed a new bid";
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

}
