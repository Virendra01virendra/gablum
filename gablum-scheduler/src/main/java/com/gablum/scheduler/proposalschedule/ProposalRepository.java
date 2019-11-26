package com.gablum.scheduler.proposalschedule;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface ProposalRepository extends MongoRepository<ProposalScheduleModel, String> {
     ProposalScheduleModel findByProposerUserName(String u);
}
