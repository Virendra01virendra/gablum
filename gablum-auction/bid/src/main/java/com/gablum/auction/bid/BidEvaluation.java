package com.gablum.auction.bid;



public class BidEvaluation {
    public static void main(String[] args){
        float price = 1000;
        int timeOfDelivery = 30;
        int creditPeriod = 6;
        boolean certification = true;
        boolean type = true;

        float priceSpec = 400;
        int timeOfDeliverySpec = 15;
        int creditPeriodSpec = 1;
        boolean certificationSpec = true;
        boolean typeSpec = true;

        double scorecnt = score(price, timeOfDelivery, creditPeriod, certification, type,
         priceSpec, timeOfDeliverySpec, creditPeriodSpec, certificationSpec, typeSpec);
        System.out.println("score------------->" + scorecnt);
    }

    static double score(float price, int timeOfDelivery, int creditPeriod, boolean certification, boolean type,
                 float priceSpec, int timeOfDeliverySpec, int creditPeriodSpec, boolean certificationSpec, boolean typeSpec){
        double score = 0.0;
        double priceNorm = (price - priceSpec)/priceSpec;
        double timeOfDeliveryNorm = (timeOfDelivery - timeOfDeliverySpec)/timeOfDeliverySpec;
        double creditPeriodNorm = (creditPeriod - creditPeriodSpec)/creditPeriodSpec;
        double certificationNorm = 0;
        if (certificationSpec == true && certification == false){
            certificationNorm = -1;
        }
        if (certificationSpec == true && certification == true){
            certificationNorm = 1;
        }

        score = -priceNorm - timeOfDeliveryNorm + certificationNorm + certificationNorm;

        return score;
    }

}



