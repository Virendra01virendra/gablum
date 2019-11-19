package com.gablum.auction.bid;

import com.gablum.auction.bid.Bid;
import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BidRepository extends MongoRepository<Bid, String> {
    public List<Bid> findAllByOrderByScoreAsc();
}
