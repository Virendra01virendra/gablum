package com.gablum.proposals.proposal.controller;

import com.gablum.proposals.proposal.model.Proposal;
import com.gablum.proposals.proposal.service.ProposalService;
import com.gablum.proposals.proposal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin(origins="*")
public class ProposalController {

    @Autowired
    private ProposalService proposalService;

    @Autowired
    private UserService userService;

    @PostMapping("/proposals")                                 // Add proposal details
    public Proposal addProposal(@RequestBody Proposal proposalData, HttpServletRequest request) {
        String email = userService.getEmail(request);
        proposalData.setCreatedBy(email);
        proposalData.setUpdatedBy(email);
        proposalData.setCreatedOn(new Date());
        proposalData.setUpdatedOn(new Date());
        Proposal savedProposal = proposalService.addProposals(proposalData);
        return savedProposal;
    }

    @GetMapping("/proposals/{proposalId}")                  // Get proposal details by Id
    public Proposal getProposalById(@PathVariable("proposalId") UUID proposalId) {
        return proposalService.getProposalById(proposalId);
    }

    @GetMapping("/proposals")
    public List<Proposal> getProposals(@RequestParam Map<String, String> queryMap, HttpServletRequest request) {
        String email = userService.getEmail(request);
        return proposalService.getAllProposals(queryMap, email);
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