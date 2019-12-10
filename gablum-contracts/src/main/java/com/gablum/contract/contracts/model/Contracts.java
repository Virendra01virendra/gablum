package com.gablum.contract.contracts.model;

import com.gablum.contract.contracts.model.othermodels.Auction;
import com.gablum.contract.contracts.model.othermodels.Bid;
import com.gablum.contract.contracts.model.othermodels.BidDataEntity;
import com.gablum.contract.contracts.model.othermodels.User;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotNull;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;
import java.util.UUID;

@Document("contracts")
@Getter @Setter @AllArgsConstructor @ToString
public class Contracts {
    @Id
    private String _id;
    private String contractId = UUID.randomUUID().toString();;
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
    private String key;
    private int nonce;

    public void generatingKey(){
        int leftLimit = 97, rightLimit = 122;
        int targetStringLength = 32;

        Random random = new Random();
        StringBuilder buffer = new StringBuilder(targetStringLength);
        for(int i=0; i<targetStringLength; i++){
            int randomLimitedInt = leftLimit + (int)(random.nextFloat()*(rightLimit-leftLimit+1));
            buffer.append((char) randomLimitedInt);
        }
        this.key = buffer.toString();
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

}
