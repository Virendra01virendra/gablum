package com.gablum.scheduler.proposalschedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProposalController {
    @Autowired
    private ProposalService proposalService;

    @GetMapping("/echo")
    public String getEcho() {
        return "schedules";
    }

    @GetMapping("/proposalschedule/{proposerUserName}")
    public ProposalScheduleModel findProposalTimingUsingUserName(@RequestParam String proposerUserName){
        return proposalService.findByUserName(proposerUserName);
    }

}