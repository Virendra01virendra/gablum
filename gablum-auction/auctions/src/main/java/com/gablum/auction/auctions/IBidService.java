package com.gablum.auction.auctions;

import java.util.List;

public interface IBidService {

    BidDataEntity addBid(BidDataEntity bidDataEntity);
    List<BidDataEntity> getBids();
}
