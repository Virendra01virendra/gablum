package com.gablum.auction.bid.repository;

import com.gablum.auction.bid.model.Bid;
import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BidRepository extends MongoRepository<Bid, String> {
    public List<Bid> findAllByOrderByScoreAsc();
}
