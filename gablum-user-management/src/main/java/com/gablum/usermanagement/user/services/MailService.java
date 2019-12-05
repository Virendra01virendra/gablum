package com.gablum.usermanagement.user.services;

import com.gablum.usermanagement.user.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    SimpleMailMessage msg = new SimpleMailMessage();
    public void sendEmail(String type, String email){
        if (type == "registering"){
            msg.setTo(email);
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
