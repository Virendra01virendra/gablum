package com.gablum.contract.contracts;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContractsController {

    @GetMapping("/echo")
    public String getEcho() {
        return "contracts";
    }
}