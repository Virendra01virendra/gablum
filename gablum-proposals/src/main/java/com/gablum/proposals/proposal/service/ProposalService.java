package com.gablum.proposals.proposal.service;

import com.gablum.proposals.proposal.model.Proposal;
import com.gablum.proposals.proposal.repository.ProposalRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@AllArgsConstructor
@Getter
@Setter
@Service
public class ProposalService implements IProposalService {

    @Autowired
    private ProposalRepository proposalRepo;
//    public Proposal saveProposal(Proposal proposal) {
//        return proposalRepo.save(proposal);
//    }

    private List<Proposal> proposals;

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

    //extend Proposal
    public Proposal extendProposal(Proposal currentProposal, UUID proposalId) {
        Proposal proposal = getProposalById(proposalId);
        proposal.setProposalId(proposalId);
        proposal.setRegEndDate(currentProposal.getRegEndDate());
        proposal.setRegStartDate(currentProposal.getRegStartDate());
        return proposalRepo.save(proposal);

    }
}