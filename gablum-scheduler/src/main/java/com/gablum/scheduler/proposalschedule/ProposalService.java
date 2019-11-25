package com.gablum.scheduler.proposalschedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProposalService {

    @Autowired
    private ProposalRepository proposalRepository;

    public ProposalScheduleModel findByUserName(String userName){
        return proposalRepository.findByProposerUserName(userName);
    }

}