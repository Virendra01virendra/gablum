package com.gablum.proposals.proposal.controller;

import com.gablum.proposals.proposal.model.Proposal;
import com.gablum.proposals.proposal.service.ProposalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins="*")
public class ProposalController {

    @Autowired
    private ProposalService proposalService;

    @GetMapping("/echo")
    public String getEcho() {

        return "proposal";
    }

    @PostMapping("/proposals")                                 // Add proposal details
    public Proposal saveProposal1(@RequestBody Proposal proposalData) {
        return proposalService.saveProposal(proposalData);
    }

    @GetMapping("/proposals/{proposalId}")                  // Get proposal details by Id
    public Proposal getProposalById(@PathVariable("proposalId") UUID proposalId) {
        return proposalService.getProposalById(proposalId);
    }

    @GetMapping("/proposals")
    public List<Proposal> getProposals() {
        return proposalService.getProposals();
    }

//    @GetMapping("/proposals/{proposalId}")                    // Edit proposal details
//    public Proposal editProposal(@PathVariable("proposalId") UUID proposalId) {
//      Proposal proposal = proposalService.getProposalById(proposalId);
//      return proposal;
//    }



}