package com.gablum.proposals.proposal.controller;

import com.gablum.proposals.proposal.interfaces.ProposalInterfaceRabbit;
import com.gablum.proposals.proposal.model.Proposal;
import com.gablum.proposals.proposal.service.ProposalService;
import com.gablum.proposals.proposal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
public class ProposalController {

    public MessageChannel messageChannel;

    @Autowired
    private ProposalService proposalService;

    @Autowired
    private UserService userService;

    public ProposalController(ProposalInterfaceRabbit proposalInterface){
        messageChannel = proposalInterface.newProposalMessageChannel();
    }

    @PostMapping("/proposals")                                 // Add proposal details
    public Proposal addProposal(@RequestBody Proposal proposalData, HttpServletRequest request) {
        //FIXME: ensure it is a buyer floating a proposal
        String email = userService.getEmail(request);
        proposalData.setCreatedBy(email);
        proposalData.setUpdatedBy(email);
        proposalData.setCreatedOn(new Date());
        proposalData.setUpdatedOn(new Date());
        Proposal savedProposal = proposalService.addProposals(proposalData);
        Message<Proposal> msg = MessageBuilder.withPayload(proposalData).build();
        messageChannel.send(msg);
        return savedProposal;
    }

    @GetMapping("/proposals/{proposalId}")                  // Get proposal details by Id
    public Proposal getProposalById(@PathVariable("proposalId") String proposalId) {
        //FIXME: only seller can view another proposal
        return proposalService.getProposalById(proposalId);
    }

    @GetMapping("/proposals")
    public List<Proposal> getProposals(@RequestParam Map<String, String> queryMap, HttpServletRequest request) {
        // Message<Proposal> msg = MessageBuilder.withPayload("helloo world from proposal's rabbit").build();
        // messageChannel.send(msg);
        String email = userService.getEmail(request);
        return proposalService.getAllProposals(queryMap, email);
    }

    @DeleteMapping("/proposals/{proposalId}")                                      //Delete Proposal
    public void deleteProposalbyID(@PathVariable("proposalId") String proposalId) {
        proposalService.deleteProposalbyID(proposalId);
    }

    //Extending the proposal
    @PatchMapping("proposals/{proposalId}")
    public ResponseEntity<Proposal> extendedProposal (
            @RequestBody Proposal modifiedProposal, @PathVariable("proposalId") String proposalId) {
        Proposal proposal = proposalService.getProposalById(proposalId);
        if (proposal == null) {
            return new ResponseEntity<Proposal>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Proposal>(
                proposalService.extendProposal(modifiedProposal, proposalId),
                HttpStatus.OK
        );
    }

    @GetMapping("/proposals/browse")
    public ResponseEntity<List<Proposal>> browseProposals(@RequestParam Map<String, String> queryMap) {
        return new ResponseEntity<List<Proposal>>(
                proposalService.getAllProposals(queryMap),
                HttpStatus.OK
        );
    }

    @PatchMapping("/proposals")
    //FIXME: Duplicate enteries are possible
    public ResponseEntity<Proposal> saveInterestedSeller(@RequestBody Proposal proposalInWhichAdditionIsDone, HttpServletRequest request ){
        String currentLoggedUserEmail = userService.getEmail(request);
        return new ResponseEntity<Proposal>(proposalService.saveInterestedSeller(currentLoggedUserEmail,proposalInWhichAdditionIsDone),HttpStatus.OK);
    }

    @GetMapping("/proposals/browse/{businessSubDomain}")
    public ResponseEntity<List<Proposal>> getProposalsBySubDomain(@RequestParam Map<String, String> queryMap, @PathVariable("businessSubDomain") String businessSubDomain ) {
        return new ResponseEntity<List<Proposal>>(
                proposalService.getAllProposalsByBusinessSubDomain(queryMap, businessSubDomain),
                HttpStatus.OK
        );
    }

}