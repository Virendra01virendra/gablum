package com.gablum.usermanagement.user.model;

public class SignUpRequest {

    private String name;
    private String email;
    private String address;
    private long phone;
    private String companyName;
    private String username;
    private String businessLicense;
    private String password;
    public static enum role {
        ADMIN, BUYER, SELLER
    }
    public static enum domain {
        Agriculture, Textile, Others
    }
    public static enum subDomain {
        RawMaterial, Equipments, Produce
    }

    public SignUpRequest() {
    }


}
