package com.gablum.proposals.proposal.service;

import com.gablum.proposals.proposal.model.Proposal;

import java.util.List;
import java.util.UUID;

public interface IProposalService {

    List<Proposal> getAllProposals();

    Proposal getProposalById(UUID proposalId);

    Proposal addProposals(Proposal proposalToAdd);

}
