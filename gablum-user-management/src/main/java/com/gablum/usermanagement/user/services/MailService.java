package com.gablum.usermanagement.user.services;

import com.gablum.usermanagement.user.model.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private JavaMailSender javaMailSender;

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

    public void sendEmail(String type, User[] userList){
        if (type == "registering"){

//            msg.setTo(for( int i=0; i< userList.length; i++){
//                userList[i].getEmail();
//                });

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
}
