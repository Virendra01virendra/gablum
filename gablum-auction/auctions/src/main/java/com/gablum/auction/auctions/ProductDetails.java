package com.gablum.auction.auctions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
@Document("ProductDetail")
public class ProductDetails {
    @Id
    private String productId = UUID.randomUUID().toString();
    private String productName;
    private String productSpec;
    private UUID userID;
    private String businessDomain;
    private String businessSubDomain;
}
