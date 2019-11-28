package com.gablum.auction.auctions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BidService implements IBidService {
    @Autowired
    private BidRepo bidRepo;

    @Override
    public BidDataEntity addBid(BidDataEntity bidDataEntity) {
        return bidRepo.save(bidDataEntity);
    }

    @Override
    public List<BidDataEntity> getBids() {
        return bidRepo.findAll();
    }
}


