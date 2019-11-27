package com.gablum.auction.bid;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

import static com.gablum.auction.bid.BidEvaluation.score;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import org.junit.jupiter.api.Assertions;

@SpringBootTest
public class BidEvaluationTests {

    float price = 400;
    Date timeOfDelivery = new Date(15);
    int creditPeriod = 1;
    boolean qaqccertification = true;
    boolean typeOfSupply = true;

    float priceSpec = 400;
    Date timeOfDeliverySpec = new Date(15);
    int creditPeriodSpec = 1;
    boolean qaqccertificationSpec = true;
    boolean typeOfSupplySpec = true;

    float weightPriceSpec = 1;
    float weightTimeOfDeliverySpec = 1;
    float weightCreditPeriodSpec = 1;
    float weightQaqcCertificationSpec = 1;
    float weightTypeOfSupplySpec = 1;

    @Test
    public void ExactMatchRequirements(){
        double scorecnt = score(price, timeOfDelivery, creditPeriod, qaqccertification, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);

        Assertions.assertEquals(scorecnt, 0);
    }

    float price2 = 800;
    @Test
    public void MorePriceRequirements(){
        double scorecnt2 = score(price2, timeOfDelivery, creditPeriod, qaqccertification, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
        Assertions.assertTrue(scorecnt2 > 0);
    }

    float price3 = 200;
    @Test
    public void LessePriceRequirements(){
        double scorecnt3 = score(price3, timeOfDelivery, creditPeriod, qaqccertification, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
        Assertions.assertTrue(scorecnt3 < 0);
    }

}
