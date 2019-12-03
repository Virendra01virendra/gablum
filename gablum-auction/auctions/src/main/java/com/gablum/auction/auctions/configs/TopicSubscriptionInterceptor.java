package com.gablum.auction.auctions.configs;
import com.gablum.auction.auctions.AuctionService;
import com.gablum.auction.auctions.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;

@Slf4j
public class TopicSubscriptionInterceptor implements ChannelInterceptor {

    @Autowired
    private UserService userService;

    @Autowired
    private AuctionService auctionService;

    private final String AUTH = "auth";

    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(message);
        if (StompCommand.SUBSCRIBE.equals(headerAccessor.getCommand())) {

//            throw new NullPointerException("nope");
            subscriptionAuthorized(headerAccessor);
        }
        return message;
    }

    private boolean subscriptionAuthorized(StompHeaderAccessor headerAccessor) {
        String authHeader = headerAccessor.getNativeHeader(AUTH).toString();
        authHeader = authHeader.substring(1, authHeader.length() - 1);
        String subscriptionTopic = headerAccessor.getDestination();
        subscriptionTopic = subscriptionTopic.substring(1);
        log.warn("\n\n\n\n");
        log.warn(authHeader);
        log.warn(subscriptionTopic);
        log.warn("\n\n\n\n");
        return true;
    }
}
