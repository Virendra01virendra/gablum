package com.gablum.usermanagement.user.controller;

import com.gablum.usermanagement.user.services.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MailController {
    @Autowired
    MailService mailService;

    @PostMapping("/registering")
    public void sendingRegistrationMail(){
        
    }
}
