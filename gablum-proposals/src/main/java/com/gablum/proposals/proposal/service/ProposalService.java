package com.gablum.proposals.proposal.service;

import com.gablum.proposals.proposal.model.Proposal;
import com.gablum.proposals.proposal.repository.ProposalRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
@Service
public class ProposalService implements IProposalService {

    @Autowired
    private ProposalRepository proposalRepo;

    private List<Proposal> proposals;

    private Pageable getPageable(Map<String, String> queryMap) {
        String sortKey = "auctionName";
        int pageLength = 10;
        int page = 0;
        if (queryMap.containsKey("sort")) {
            sortKey = queryMap.get("sort");
        }
        if (queryMap.containsKey("pagesize")) {
            pageLength = Integer.parseInt(queryMap.get("pagesize"));
        }
        if (queryMap.containsKey("page")) {
            page = Integer.parseInt(queryMap.get("page"));
        }

        return PageRequest.of(page, pageLength, Sort.by(sortKey));
    }

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

    // adding proposals
    @Override
    public Proposal addProposals(Proposal proposalToAdd) {
        return proposalRepo.save(proposalToAdd);
    }

    public void deleteProposalbyID(UUID proposalId) {
        proposalRepo.deleteByProposalId(proposalId);
    }

    // extend Proposal
    public Proposal extendProposal(Proposal modifiedProposal, UUID proposalId) {
        Proposal proposalToChange = getProposalById(proposalId);
        proposalToChange.setRegStartDate(modifiedProposal.getRegStartDate());
        proposalToChange.setRegEndDate(modifiedProposal.getRegEndDate());
        return proposalRepo.save(proposalToChange);



//        Proposal proposal = getProposalById(proposalId);
//        currentProposal.setRegEndDate(currentProposal.getRegEndDate());
//        currentProposal.setRegStartDate(currentProposal.getRegStartDate());
//        return proposalRepo.save(currentProposal);
    }

    @Override
    public List<Proposal> getAllProposals(Map<String, String> queryMap, String email) {
        return proposalRepo.getAllProposalsByCreatedBy(email, getPageable(queryMap)).getContent();
    }

    @Override
    public List<Proposal> getAllProposals(Map<String, String> queryMap) {
        return proposalRepo.getAllProposalsByRegEndDateGreaterThan(
                getPageable(queryMap), new Date()
        ).getContent();
    }

    public Proposal saveInterestedSeller(String currentLoggedUserEmail, Proposal proposalInWhichAdditionIsDone) {
        Proposal updatedProposal = proposalInWhichAdditionIsDone;
        updatedProposal.setInterestedUsersEmail(currentLoggedUserEmail);
        updatedProposal.setInterested(updatedProposal.getInterestedUsersEmail().size());
        return proposalRepo.save(updatedProposal);
    }
}