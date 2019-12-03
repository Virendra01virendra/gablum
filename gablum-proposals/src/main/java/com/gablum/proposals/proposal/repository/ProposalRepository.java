package com.gablum.proposals.proposal.repository;

import com.gablum.proposals.proposal.model.Proposal;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.Optional;

public interface ProposalRepository extends MongoRepository<Proposal, ObjectId> {

    Optional<Proposal> findByProposalId(String proposalId);

    Page<Proposal> getAllProposalsByCreatedBy(String email, Pageable page);

    void deleteByProposalId(String proposalId);

    Page<Proposal> getAllProposalsByRegEndDateGreaterThan(Pageable page, Date currentDate);

}
