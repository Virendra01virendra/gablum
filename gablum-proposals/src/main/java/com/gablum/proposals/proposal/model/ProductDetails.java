package com.gablum.proposals.proposal.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Getter
@Setter
@Document("ProductDetail")
public class ProductDetails {

    private UUID productId;
    private String productName;
    private List <String> productSpecList;
    private UUID userID;

}
