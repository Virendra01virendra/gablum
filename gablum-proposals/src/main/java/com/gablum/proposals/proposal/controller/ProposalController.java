package com.gablum.proposals.proposal.controller;

import com.gablum.proposals.proposal.model.Proposal;
import com.gablum.proposals.proposal.service.ProposalService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class ProposalController {

    private ProposalService proposalService;

    @GetMapping("/echo")
    public String getEcho() {
        return "proposal";
    }

    @PostMapping("/proposals")                                 // Add proposal details
    public Proposal addProposal(@RequestBody Proposal proposalData) {
        Proposal savedProposal = proposalService.addProposals(proposalData);
        return savedProposal;
    }

    @GetMapping("/proposals/{proposalId}")                  // Get proposal details by Id
    public Proposal getProposalById(@PathVariable("proposalId") UUID proposalId) {
        return proposalService.getProposalById(proposalId);
    }

    @GetMapping("/proposals")
    public List<Proposal> getProposals() {
        return proposalService.getAllProposals();
    }

//    @GetMapping("/proposals/{proposalId}")                    // Edit proposal details
//    public Proposal editProposal(@PathVariable("proposalId") UUID proposalId) {
//      Proposal proposal = proposalService.getProposalById(proposalId);
//      return proposal;
//    }

    @GetMapping("/proposals/{proposalId}")                                      //Delete Proposal
    public void deleteProposalbyID(@PathVariable("proposalId") UUID proposalId) {
        proposalService.deleteProposalbyID(proposalId);
    }



}