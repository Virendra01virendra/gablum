package com.gablum.contract.contracts.model;

import org.apache.tomcat.util.codec.binary.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

public class EncryptedContract {
    public Contracts contract;
    private String key ;
    private String initVector ;
    private IvParameterSpec iv;
    private SecretKeySpec secretKeySpec;

    public String encrypt(String value) {
        try {
            this.iv = new IvParameterSpec(initVector.getBytes("UTF-8"));
            this.secretKeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
//            System.out.println(secretKeySpec.toString());

            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
            cipher.init(Cipher.ENCRYPT_MODE, this.secretKeySpec, this.iv);

            byte[] encrypted = cipher.doFinal(value.getBytes());
//            System.out.println("encrypted");
//            System.out.println(Base64.encodeBase64String(encrypted).length());
            return Base64.encodeBase64String(encrypted);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

    public String decrypt(String encrypted) {
        try {
            this.iv = new IvParameterSpec(this.initVector.getBytes("UTF-8"));
            this.secretKeySpec = new SecretKeySpec(this.key.getBytes("UTF-8"), "AES");

            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
            cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, iv);
            byte[] original = cipher.doFinal(Base64.decodeBase64(encrypted));
            return new String(original);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

    public EncryptedContract(Contracts contract){
        this.contract = contract;
        this.key = contract.getKey();
        this.initVector ="initVector123456";
    }

    public EncryptedContract(String key){
        this.key = key;
        this.initVector ="initVector123456";
    }

}
