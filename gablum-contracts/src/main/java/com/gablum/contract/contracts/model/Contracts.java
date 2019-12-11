package com.gablum.contract.contracts.model;

import com.gablum.contract.contracts.model.othermodels.Auction;
import com.gablum.contract.contracts.model.othermodels.BidDataEntity;
import com.gablum.contract.contracts.model.othermodels.User;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;
import java.util.UUID;

@Document("contracts")
@Getter @Setter @ToString
public class Contracts {
    @Id
    private String _id;
    private String contractId;
    private String auctionId;
    private String bidId;
    private Auction auctionDetails;
    private BidDataEntity bidDetails;
    private String buyerEmail;
    private User buyer;
    private String buyerESign;
    private String sellerESign;
    private String sellerEmail;
    private User seller;
    private Boolean contractStatus = true;
    private String currentHash;
    private String previousHash;


    public Contracts(String auctionId, String bidId, Auction auctionDetails, BidDataEntity bidDetails, String buyerEmail, User buyer, String sellerEmail, User seller, Boolean contractStatus, String previousHash) {
        this.contractId = UUID.randomUUID().toString();
        this.auctionId = auctionId;
        this.bidId = bidId;
        this.auctionDetails = auctionDetails;
        this.bidDetails = bidDetails;
        this.buyerEmail = buyerEmail;
        this.buyer = buyer;
        this.sellerEmail = sellerEmail;
        this.seller = seller;
        this.contractStatus = contractStatus;
        this.previousHash = previousHash;
        this.generatingBuyerESign();
        this.generatingSellerESign();
        this.generatingCurrentHash();
    }

    public void generatingBuyerESign(){
        String toBeUsedForHash = buyer.get_id() + buyer.getEmail();

        try{
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(toBeUsedForHash.getBytes("UTF-8"));
            StringBuffer hexString =new StringBuffer();
            for (int i=0 ; i<hash.length; i++){
                String hex = Integer.toHexString(0xff & hash[i]);
                if (hex.length()==1){
                    hexString.append(0);
                }
                hexString.append(hex);
            }
            this.buyerESign = hexString.toString();

        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }

    public void generatingSellerESign(){
        String toBeUsedForHash = seller.get_id() + seller.getEmail();

        try{
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(toBeUsedForHash.getBytes("UTF-8"));
            StringBuffer hexString =new StringBuffer();
            for (int i=0 ; i<hash.length; i++){
                String hex = Integer.toHexString(0xff & hash[i]);
                if (hex.length()==1){
                    hexString.append(0);
                }
                hexString.append(hex);
            }
            this.sellerESign = hexString.toString();

        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }

    public void generatingCurrentHash(){
        String toBeUsedForHash = _id + auctionDetails.toStringContract()
                + bidDetails.toStringContract() + buyerEmail + sellerEmail + buyerESign
                + sellerESign + previousHash;
        try{
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(toBeUsedForHash.getBytes("UTF-8"));
            StringBuffer hexString = new StringBuffer();
            for (int i=0; i<hash.length; i++){
                String hex = Integer.toHexString(0xff & hash[i]);
                if(hex.length()==1){
                    hexString.append(0);
                }
                hexString.append(hex);
            }
            this.currentHash = hexString.toString();
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }

    public String toBeEncrypted(){
        return _id + contractId + auctionId + bidId + auctionDetails.toStringContract()
                + bidDetails.toStringContract() + buyer.getName() + buyerEmail + buyer.getCompanyName()
                + seller.getName() + sellerEmail + seller.getCompanyName();
    }
}
