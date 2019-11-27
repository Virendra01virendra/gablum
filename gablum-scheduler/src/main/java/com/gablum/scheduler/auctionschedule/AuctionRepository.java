package com.gablum.scheduler.auctionschedule;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface AuctionRepository extends MongoRepository<AuctionModel, String> {

}
