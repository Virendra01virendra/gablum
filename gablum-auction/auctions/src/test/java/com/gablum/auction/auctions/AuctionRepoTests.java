package com.gablum.auction.auctions;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

@ExtendWith(SpringExtension.class)
@DataMongoTest
public class AuctionRepoTests {

    @Autowired
    private AuctionRepo auctionRepo;

    private Auction testAuction1 = new Auction();
    private Auction testAuction2 = new Auction();

    @BeforeEach
    public void setupEntities() {
        testAuction1.setProposalId(13);
        testAuction1.setAuctionId(1);
        testAuction2.setProposalId(42);
        testAuction2.setAuctionId(2);
    }

    @Test
    public void dbCanStore() {
        auctionRepo.saveAll(
                List.of(testAuction1, testAuction2)
        );
        Assertions.assertEquals(
                2,
                auctionRepo.findAll().size(),
                "db can store all elements and fetch"
        );
    }

    public void 
}
