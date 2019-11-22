package com.gablum.proposals.proposal.repository;

import com.gablum.proposals.proposal.model.Proposal;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface ProposalRepository extends MongoRepository<Proposal, Integer> {

    Proposal findByProposalId(UUID proposalId);
}
