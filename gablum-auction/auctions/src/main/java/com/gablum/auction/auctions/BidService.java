package com.gablum.auction.auctions;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static com.gablum.auction.auctions.BidEvaluation.score;

@Service
public class BidService implements IBidService {
    @Autowired
    private BidRepo bidRepo;

    @Autowired
    private AuctionService auctionService;

    @Override
    public BidDataEntity addBid(BidDataEntity bidDataEntity) {
        return bidRepo.save(bidDataEntity);
    }

    @Override
    public List<BidDataEntity> getBids() {
        return bidRepo.findAll();
    }

    @Override
    public float getBidScore(Bid bid, String auctionId) throws ParseException {
        Auction auction = auctionService.getAuctionById(auctionId);

        DateFormat formatter2 = new SimpleDateFormat("yyyy-MM-dd");
        Date d1 = new Date();
        String dt2 = auction.getProposal().getDeliveryDate();
        d1 = formatter2.parse(dt2);

        float pricespec = auction.getProposal().getPrice();
        Date timeOfDeliverySpec = d1;
        int creditPeriodSpec = auction.getProposal().getCreditPeriod();
        boolean qaqcCertificateSpec = auction.getProposal().isQualityCertificate();
        boolean typeOfSupplySpec = auction.getProposal().isMethodOfSupply();
        int weightPrice = auction.getProposal().getWeightPrice();
        int weightTimeOfDelivery = auction.getProposal().getWeightTimeOfDelivery();
        int weightCreditPeriod = auction.getProposal().getWeightCreditPeriod();
        int weightQaqc = auction.getProposal().getWeightQaqcCertificate();
        int weightTypeOfSupply = auction.getProposal().getWeightTypeOfDelivery();

        return score(bid.getPrice(), bid.getTimeOfDelivery(), bid.getCreditPeriod(),
                bid.isQaqcCertificate(),
                bid.isTypeOfSupply(),
                pricespec, timeOfDeliverySpec, creditPeriodSpec, qaqcCertificateSpec, typeOfSupplySpec,
                weightPrice, weightTimeOfDelivery, weightCreditPeriod, weightQaqc, weightTypeOfSupply);
    }

}


