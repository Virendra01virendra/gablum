package com.gablum.proposals.proposal.repository;

import com.gablum.proposals.proposal.model.Proposal;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface ProposalRepository extends MongoRepository<Proposal, ObjectId> {

    Optional<Proposal> findByProposalId(UUID proposalId);
    void deleteByProposalId(UUID proposalId);
}
