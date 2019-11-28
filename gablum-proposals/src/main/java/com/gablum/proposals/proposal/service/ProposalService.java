package com.gablum.proposals.proposal.service;

import com.gablum.proposals.proposal.model.Proposal;
import com.gablum.proposals.proposal.repository.ProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProposalService implements IProposalService {

    @Autowired
    private ProposalRepository proposalRepo;
//    public Proposal saveProposal(Proposal proposal) {
//        return proposalRepo.save(proposal);
//    }

    // get all proposals
    @Override
    public List<Proposal> getAllProposals() {
        return proposalRepo.findAll();
    }
    public Proposal saveProposal(Proposal proposal) {
        return proposalRepo.save(proposal);
    }

    // get proposal by ID
    @Override
    public Proposal getProposalById(UUID proposalId) {
        return proposalRepo.findByProposalId(proposalId).orElse(null);
    }

    //adding proposals
    @Override
    public Proposal addProposals(Proposal proposalToAdd) {
        return proposalRepo.save(proposalToAdd);
    }

    public void deleteProposalbyID(UUID proposalId) {
        proposalRepo.deleteByProposalId(proposalId);
    }
}