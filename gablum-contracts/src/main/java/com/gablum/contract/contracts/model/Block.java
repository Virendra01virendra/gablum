package com.gablum.contract.contracts.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Block {
    private String encryptedData;
    private String hash;
}
