package com.gablum.usermanagement.user.controller;

import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.services.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MailController {
    @Autowired
    MailService mailService;

    public void sendingRegistrationMail(@RequestBody User user){
        mailService.sendEmail("registering", user);
    }


//    public void sendingProposalFloatingMail(@RequestBody User user){
//
//    }

}
