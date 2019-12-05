package com.gablum.auction.auctions;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

import static com.gablum.auction.auctions.BidEvaluation.score;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import org.junit.jupiter.api.Assertions;

@SpringBootTest
public class BidEvaluationTests {

    float price = 400;
    Date timeOfDelivery = new Date(15);
    int creditPeriod = 12;
    boolean qaqccertification = true;
    boolean typeOfSupply = true;

    float priceSpec = 400;
    Date timeOfDeliverySpec = new Date(15);
    int creditPeriodSpec = 12;
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

        Assertions.assertEquals(scorecnt, 100);
    }

    float price2 = 800;
    @Test
    public void MorePriceRequirements(){
        double scorecnt2 = score(price2, timeOfDelivery, creditPeriod, qaqccertification, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
        Assertions.assertTrue(scorecnt2 < 100);
    }

    float price3 = 200;
    @Test
    public void LesserPriceRequirements(){
        double scorecnt3 = score(price3, timeOfDelivery, creditPeriod, qaqccertification, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
        Assertions.assertTrue(scorecnt3 > 100);
    }

    Date timeOfDelivery1 = new Date(16);
    @Test
    public void GreaterDateRequirements(){
        double scorecnt4 = score(price, timeOfDelivery1, creditPeriod, qaqccertification, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
        Assertions.assertTrue(scorecnt4 < 100);
    }


    Date timeOfDelivery2 = new Date(14);
    @Test
    public void LesserDateRequirements(){
        double scorecnt5 = score(price, timeOfDelivery2, creditPeriod, qaqccertification, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
        Assertions.assertTrue(scorecnt5 > 100);
    }

    int creditPeriod1 = 13;
    @Test
    public void GreaterCreditRequirements(){
        double scorecnt6 = score(price, timeOfDelivery, creditPeriod1, qaqccertification, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
        Assertions.assertTrue(scorecnt6 > 100);
    }

    int creditPeriod2 = 11;
    @Test
    public void LesserCreditRequirements(){
        double scorecnt7 = score(price, timeOfDelivery, creditPeriod2, qaqccertification, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
        Assertions.assertTrue(scorecnt7 < 100);
    }

    boolean qaqc1 = false;
    @Test
    public void QaqcFalseRequirements(){
        double scorecnt8 = score(price, timeOfDelivery, creditPeriod2, qaqc1, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
        Assertions.assertTrue(scorecnt8 < 100);
    }


    boolean typeOfSupply1 = false;
    @Test
    public void TypeOfSupplyFalseRequirements(){
        double scorecnt9 = score(price, timeOfDelivery, creditPeriod2, qaqc1, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
        Assertions.assertTrue(scorecnt9 < 100);
    }

}
