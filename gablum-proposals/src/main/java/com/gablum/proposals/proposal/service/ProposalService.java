package com.gablum.proposals.proposal.service;

import com.gablum.proposals.proposal.model.Proposal;
import com.gablum.proposals.proposal.repository.ProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProposalService {

    @Autowired
    private ProposalRepository proposalRepo;

    public Proposal saveProposal(Proposal proposal) {
        Proposal proposal1 = proposal;
        return proposalRepo.save(proposal1);
    }

    public Proposal getProposalById(UUID proposalId) {      //search by proposal Id
        return proposalRepo.findByProposalId(proposalId);
    }

    public List<Proposal> getProposals() {       // get all proposals

        return proposalRepo.findAll();
    }
}
