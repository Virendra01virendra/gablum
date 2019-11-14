package com.gablum.proposals.proposal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProposalController {

    @GetMapping("/echo")
    public String getEcho() {
        return "proposal";
    }
}