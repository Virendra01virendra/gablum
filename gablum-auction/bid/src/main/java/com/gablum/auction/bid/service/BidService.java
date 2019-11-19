package com.gablum.auction.bid.service;

import com.gablum.auction.bid.model.Bid;
import com.gablum.auction.bid.repository.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BidService {

    @Autowired
    BidRepository bidRepository;

    public List<Bid> getAllBids(){
        return bidRepository.findAllByOrderByScoreAsc();

    }
}
