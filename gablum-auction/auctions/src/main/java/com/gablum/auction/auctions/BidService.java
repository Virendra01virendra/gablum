package com.gablum.auction.auctions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BidService {
    @Autowired
    private BidRepo bidRepo;


    public BidDataEntity addbid(BidDataEntity bidDataEntity){ return bidRepo.save(bidDataEntity); };
}
