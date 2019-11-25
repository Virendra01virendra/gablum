package com.gablum.scheduler.proposalschedule;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Date;
import java.util.UUID;

public interface ProposalRepository extends MongoRepository<ProposalScheduleModel, String> {
     ProposalScheduleModel findByProposerUserName(String u);
}
