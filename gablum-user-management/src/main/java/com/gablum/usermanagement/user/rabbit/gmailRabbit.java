package com.gablum.usermanagement.user.rabbit;

import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

@EnableBinding(iGmailRabbit.class)
public class gmailRabbit {
    @StreamListener("proposal")
    public void hello(String msg){
        System.out.println(msg);
    }
}
