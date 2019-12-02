package com.gablum.proposals.proposal.service;

import com.gablum.proposals.proposal.model.Proposal;

import java.util.List;
import java.util.Map;
import java.util.UUID;

public interface IProposalService {

    List<Proposal> getAllProposals();

    Proposal getProposalById(UUID proposalId);

    Proposal addProposals(Proposal proposalToAdd);

    Proposal extendProposal(Proposal proposal, UUID proposalId);

    List<Proposal> getAllProposals(Map<String, String> queryMap, String email);

    List<Proposal> getAllProposals(Map<String, String> queryMap);
}
