package com.gablum.proposals.proposal.service;

import com.gablum.proposals.proposal.model.Proposal;
import com.gablum.proposals.proposal.repository.ProposalRepository;

import java.util.List;
import java.util.UUID;

public class ProposalService {

    private ProposalRepository proposalRepo;

    public Proposal saveProposal(Proposal proposal) {
        return proposalRepo.save(proposal);

    }

    public Proposal getProposalById(UUID proposalId) {      //search by proposal Id
        return proposalRepo.findByProposalId(proposalId);
    }

    public List<Proposal> getProposals() {       // get all proposals
        return proposalRepo.findAll();
    }
}
