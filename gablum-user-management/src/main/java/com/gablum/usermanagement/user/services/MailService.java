package com.gablum.usermanagement.user.services;

import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.model.othermodels.Proposal;
import com.gablum.usermanagement.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {
    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private UserRepository userRepository;

    SimpleMailMessage msg = new SimpleMailMessage();

    public void sendEmail(String type, User user){
        if (type == "registering"){
            msg.setTo(user.getEmail());
            msg.setSubject("Verification of Email");
            msg.setText("All the mails form Gablum will be sent here.");
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
        if(type == "newProposal"){
            msg.setTo(proposal.getCreatedBy());

            msg.setSubject("New Proposal Added");

            String text = "You floated a new Proposal.\n";

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

//    public void sendEmail(String type, User[] userList){
//        if (type == "registering"){
//
////            msg.setTo(for( int i=0; i< userList.length; i++){
////                userList[i].getEmail();
////                });
//
//            msg.setSubject("Verification of Email");
//            msg.setText("All the mails form Gablum will be sent here.");
//            try
//            {
//                javaMailSender.send(msg);
//            } catch (MailException e){
//                System.out.println("Wrong email provided");
//                e.printStackTrace();
//            }
//        }
//    }
}
