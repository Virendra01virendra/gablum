package com.gablum.auction.auctions;


import java.util.Date;

public class BidEvaluation {
    public static void main(String[] args) {
        float price = 400;
        Date timeOfDelivery = new Date(15);
        int creditPeriod = 1;
        boolean qaqccertification = false;
        boolean typeOfSupply = true;

        float priceSpec = 400;
        Date timeOfDeliverySpec = new Date(15);
        int creditPeriodSpec = 1;
        boolean qaqccertificationSpec = true;
        boolean typeOfSupplySpec = true;

        float weightPriceSpec = 1;
        float weightTimeOfDeliverySpec = 5;
        float weightCreditPeriodSpec = 1;
        float weightQaqcCertificationSpec = 1;
        float weightTypeOfSupplySpec = 1;

        float scorecnt =  score(price, timeOfDelivery, creditPeriod, qaqccertification, typeOfSupply,
                priceSpec, timeOfDeliverySpec, creditPeriodSpec, qaqccertificationSpec, typeOfSupplySpec,
                weightPriceSpec,
                weightTimeOfDeliverySpec, weightCreditPeriodSpec, weightQaqcCertificationSpec, weightTypeOfSupplySpec);
    }

    public static float score(float price, Date timeOfDelivery, int creditPeriod, boolean qaqcCertificate,
                              boolean typeOfSupply,
                              float priceSpec, Date timeOfDeliverySpec, int creditPeriodSpec,
                              boolean qaqcCertificateSpec,
                              boolean typeOfSupplySpec,
                              float weightPriceSpec, float weightTimeOfDeliverySpec, float weightCreditPeriodSpec,
                              float weightQaqcCertificateSpec,
                              float weightTypeOfSupplySpec) {
        float score;


//        Converting weights to out of 100

        float percentWeightPriceSpec =
                100*weightPriceSpec/(weightPriceSpec + weightTimeOfDeliverySpec + weightCreditPeriodSpec
                        + weightQaqcCertificateSpec + weightTypeOfSupplySpec);
        float percentWeightTimeOfDeliverySpec =
                100*weightTimeOfDeliverySpec/(weightPriceSpec + weightTimeOfDeliverySpec + weightCreditPeriodSpec
                + weightQaqcCertificateSpec + weightTypeOfSupplySpec);
        float percentWeightCreditPeriodSpec =
                100*weightCreditPeriodSpec/(weightPriceSpec + weightTimeOfDeliverySpec + weightCreditPeriodSpec
                        + weightQaqcCertificateSpec + weightTypeOfSupplySpec);
        float percentWeightQaqcCertificationSpec =
                100*weightQaqcCertificateSpec/(weightPriceSpec + weightTimeOfDeliverySpec + weightCreditPeriodSpec
                        + weightQaqcCertificateSpec + weightTypeOfSupplySpec);
        float percentWeightTypeOfSupplySpec =
                100*weightTypeOfSupplySpec/(weightPriceSpec + weightTimeOfDeliverySpec + weightCreditPeriodSpec
                        + weightQaqcCertificateSpec + weightTypeOfSupplySpec);


//        normalization of bid parameters w.r.t. proposal specs
        float priceNorm = (price - priceSpec) / priceSpec;
        float timeOfDeliveryNorm =
                (-(float)timeOfDelivery.getTime() + (float)timeOfDeliverySpec.getTime()) / ((float)timeOfDeliverySpec.getTime());
        float creditPeriodNorm = (creditPeriod - creditPeriodSpec) / (float)creditPeriodSpec;
        float certificationNorm = 0;
        float typeOfSupplyNorm = 0;


        if (qaqcCertificateSpec == true && qaqcCertificate == false) {
            certificationNorm = -1;
        }
        if (qaqcCertificateSpec == true && qaqcCertificate == true) {
            certificationNorm = 0;
        }

        if (typeOfSupplySpec == true && typeOfSupply == false) {
            typeOfSupplyNorm = -1;
        }
        if (typeOfSupplySpec == true && typeOfSupply == true) {
            typeOfSupplyNorm = 0;
        }

        score = 100 -  percentWeightPriceSpec * priceNorm
                        + percentWeightTimeOfDeliverySpec * timeOfDeliveryNorm
                        + percentWeightCreditPeriodSpec * creditPeriodNorm
                        + percentWeightQaqcCertificationSpec * certificationNorm
                        + percentWeightTypeOfSupplySpec*typeOfSupplyNorm;

        return score;
    }

    // The score will be a perfect 100, if the bid parameters exactly match proposal paramters.
    // The score can be interpreted as what percent of proposal parameters are being satisfied by the current bid.

}



