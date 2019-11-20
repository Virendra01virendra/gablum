package com.gablum.auction.auctions.bid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;


@Component
public class BidListener {

    @Autowired
    private SimpMessageSendingOperations messageSendingOperations;

    @EventListener
    public void handleMessage(SessionConnectedEvent event) {
        System.out.println("hello");
        messageSendingOperations.convertAndSend("/topic/newbid", "hello");
    }
}
