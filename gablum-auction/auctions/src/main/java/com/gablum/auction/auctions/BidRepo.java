package com.gablum.auction.auctions;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BidRepo extends MongoRepository<BidDataEntity, ObjectId>{
}
