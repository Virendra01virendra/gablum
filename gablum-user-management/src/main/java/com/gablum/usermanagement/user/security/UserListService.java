package com.gablum.usermanagement.user.security;

import com.gablum.usermanagement.user.model.User;
import com.gablum.usermanagement.user.model.othermodels.Proposal;
import com.gablum.usermanagement.user.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

import java.util.List;
@Slf4j
@Service
public class UserListService {

    @Autowired
    public SimpMessageSendingOperations sendingOperations;
    @Autowired
    public UserRepository userRepository;

    public void postMessageToUserListChannel(Proposal proposal){
        List<User> listOfUsers = userRepository.findAllByBusinessSubDomain(proposal.getBusinessSubDomain());
        log.info("business subdomain ----- > " , proposal.getBusinessSubDomain());
        log.info("Proposal ----- > " , proposal.toString());
        log.info("Alert to be sent to user via WEB SOCKETS --------> " , listOfUsers.size());
        sendingOperations.convertAndSend(
                "topic/proposalAlert",
                 listOfUsers
                );
    }

}
