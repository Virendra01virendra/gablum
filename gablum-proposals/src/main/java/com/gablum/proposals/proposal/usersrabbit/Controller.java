package com.gablum.proposals.proposal.usersrabbit;

import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.MessageHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class Controller {
    public MessageChannel messageChannel;

    public Controller(Publisher publish) {
        messageChannel = publish.getChannel();
    }
    @GetMapping("/rabbitMq")
    public String msgGone(){
        Message<String> msg = new Message<String>() {
            @Override
            public String getPayload() {
                return "hello World from Proposal MicroService";
            }

            @Override
            public MessageHeaders getHeaders() {
                return null;
            }
        };
        messageChannel.send(msg);
        return "hello";
    }
}
