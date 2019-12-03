package com.gablum.proposals.proposal.repository;

import com.gablum.proposals.proposal.model.Proposal;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

public interface ProposalRepository extends MongoRepository<Proposal, ObjectId> {

    Optional<Proposal> findByProposalId(UUID proposalId);

    Page<Proposal> getAllProposalsByCreatedBy(String email, Pageable page);

    void deleteByProposalId(UUID proposalId);

    Page<Proposal> getAllProposalsByRegEndDateGreaterThan(Pageable page, Date currentDate);

}
