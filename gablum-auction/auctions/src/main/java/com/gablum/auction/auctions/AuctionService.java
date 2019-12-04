package com.gablum.auction.auctions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class AuctionService implements IAuctionService{

    @Autowired
    private AuctionRepo auctionRepo;



    private Pageable getPageable(Map<String, String> queryMap) {
        String sortKey = "auctionName";
        int pageLength = 10;
        int page = 0;
        if (queryMap.containsKey("sort")) {
            sortKey = queryMap.get("sort");
        }
        if (queryMap.containsKey("pagesize")) {
            pageLength = Integer.parseInt(queryMap.get("pagesize"));
        }
        if (queryMap.containsKey("page")) {
            page = Integer.parseInt(queryMap.get("page"));
        }

        return PageRequest.of(page, pageLength, Sort.by(sortKey));
    }

    @Override
    public List<Auction> getAllAuctions(Map<String, String> queryMap) {
        return auctionRepo.findAll(getPageable(queryMap)).getContent();
    }

    public List<Auction> getAllAuctionsBuyer(Map<String, String> queryMap, String email) {
        return auctionRepo.findAllByCreatedBy(getPageable(queryMap), email).getContent();
    }

    @Override
    public Auction getAuctionById(String auctionId) {
        return auctionRepo.findByAuctionId(auctionId).orElse(null);
    }

    @Override
    public List<Auction> addAuctions(List<Auction> auctionToAdd) {
        return auctionRepo.saveAll(auctionToAdd);
    }

    public List<Auction> getAuctionSeller(Map<String, String> queryMap, String email) {
        return auctionRepo.findAllBySelectedParticipantListContaining(getPageable(queryMap), email).getContent();
    }

}
