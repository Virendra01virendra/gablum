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
            msg.setText("All the mails from Gablum will be sent here.");
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
            String text = "You added a new Proposal.\n";
            text += "\nProposal Details are : \n";
            text += "\nProduct Name : " + proposal.getProductName();
            text += "\nDomain : " + proposal.getBusinessDomain();
            text += "\nSubDomain : " + proposal.getBusinessSubDomain();
            text += "\nQuantity : " + proposal.getQuantityValue() + proposal.getQuantityUnit() ;
            text += "\nQuality Certification Weight : " + proposal.getQualityCertificationWeight() ;
            text += "\nPrice: " + proposal.getPrice() ;
            text += "\nPrice Weight : " + proposal.getPriceWeight() ;
            text += "\nCredit Period : " + proposal.getCreditPeriod() + "months" ;
            text += "\nCredit Period Weight : " + proposal.getCreditPeriodWeight() ;
            text += "\nDelivery : " + proposal.getDeliveryDate() ;
            text += "\nDelivery Date : " + proposal.getDeliveryDateWeight() ;
            text += "\nMethod of Supply Weight : " + proposal.getMethodOfSupplyWeight() ;
            text += "\nRegistration Start Date : " + proposal.getRegStartDate() ;
            text += "\nRegistration End Date : " + proposal.getRegEndDate() ;
            text += "\nAuction Start Date : " + proposal.getAuctionStartDate() ;
            text += "\nAuction End Date : " + proposal.getAuctionEndDate() ;
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
