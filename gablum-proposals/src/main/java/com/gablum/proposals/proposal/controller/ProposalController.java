package com.gablum.proposals.proposal.controller;

import com.gablum.proposals.proposal.model.Proposal;
import com.gablum.proposals.proposal.service.ProposalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @DeleteMapping("/proposals/{proposalId}")                                      //Delete Proposal
    public void deleteProposalbyID(@PathVariable("proposalId") UUID proposalId) {
        proposalService.deleteProposalbyID(proposalId);
    }

    //Extending the proposal
    @PatchMapping("proposals/{proposalId}")
    public ResponseEntity<Proposal> extendedProposal (
            @RequestBody Proposal currentProposal, @PathVariable("proposalId") UUID proposalId) {
        Proposal proposal = proposalService.getProposalById(proposalId);
        if (proposal == null) {
            return new ResponseEntity<Proposal>(HttpStatus.NOT_FOUND);
        }
        proposalService.extendProposal(currentProposal, proposalId);
        return new ResponseEntity<Proposal>(proposal, HttpStatus.OK);
    }

}