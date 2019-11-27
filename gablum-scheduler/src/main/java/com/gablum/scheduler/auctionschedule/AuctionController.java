package com.gablum.scheduler.auctionschedule;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Scheduler")
public class AuctionController {

    @GetMapping("/getproposals")
    public Object getProposalFromUser(){
        return null;
    }
}
