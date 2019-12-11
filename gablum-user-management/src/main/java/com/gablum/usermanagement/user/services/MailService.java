package com.gablum.usermanagement.user.services;

import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.model.othermodels.Auction;
import com.gablum.usermanagement.user.model.othermodels.Proposal;
import com.gablum.usermanagement.user.model.othermodels.BidMessage;
import com.gablum.usermanagement.user.model.othermodels.BidDataEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class MailService {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(String type, User user){
        SimpleMailMessage msg = new SimpleMailMessage();
        if (type == "registering"){
            msg.setTo(user.getEmail());
            msg.setSubject("Verification of Email");

            String text = "Hello " +user.getName()+ " from"+user.getCompanyName();
            text += "Welcome to Gablum!!\nThanks for choosing us for your business.";
            text += "Get started by logging in to your profile";
            text += "You can now connect with businesses that best suit your expectations.\nIn case of " +
                    "any query you can connect with our support team once you login.";
            text += "\n\nSee you online.\nTeam Gablum.";
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
        if(type == "newProposal"){
            msg.setTo(proposal.getCreatedBy());

            msg.setSubject("New Proposal Added");

            String text = "Thanks for floating a new proposal on Gablum.";
            text += "We hope to provide you with the best pool of suppliers inline with your proposal.\n";
            text += "\n\n<h1>Proposal Details are</h1> : \n";
            text += "\n<h3>Product Name : </h3>" + proposal.getProductName();
            text += "\n<h3>Domain : </h3>" + proposal.getBusinessDomain();
            text += "\n<h3>SubDomain : </h3>" + proposal.getBusinessSubDomain();
            text += "\n<h3>Quantity : </h3>" + proposal.getQuantityValue() + proposal.getQuantityUnit() ;
            text += "\n<h3>Delivery : </h3>" + proposal.getDeliveryDate() ;
            text += "\n<h3>Registration Start Date : </h3>" + proposal.getRegStartDate() ;
            text += "\n<h3>Auction Start Date : </h3>" + proposal.getAuctionStartDate() ;
            text += "\n\nSimply visit your account dashboard if you wish to make changes to your floated proposal.";
            text += "\nTeam Gablum";
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


    public void sendAuctionEmail(String type, Auction auction) {
        SimpleMailMessage msg = new SimpleMailMessage();
        if (type == "newAuction"){
            msg.setTo(auction.getCreatedBy());
            msg.setSubject("New Auction Floated");
            String text = "You have added a new Auction";
            text += ""
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
