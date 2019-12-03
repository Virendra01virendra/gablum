package com.gablum.contract.contracts.controller;

import com.gablum.contract.contracts.model.ContractStatusEditable;
import com.gablum.contract.contracts.model.Contracts;
import com.gablum.contract.contracts.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
public class ContractsController {
    @Autowired
    private ContractService contractService;

    @GetMapping("/contracts/{contractsId}")
    public Contracts getContract(@PathVariable UUID contractId){
        return contractService.getContractById(contractId);
    }
    @GetMapping("/contracts")
    public List<Contracts> getContractByBuyerId(@RequestParam UUID buyerId){
        return contractService.getContractByBuyerId(buyerId);
    }
    @PostMapping("/contracts")
    public Contracts saveContract(@RequestBody Contracts contracts){
        return contractService.saveContract(contracts);
    }

    @PutMapping("/contracts/{contractsId}")
    public Contracts updateContractStatus(@PathVariable UUID contractsId, @RequestBody ContractStatusEditable contractToEdit){
        return contractService.updateContract(contractsId, contractToEdit);
    }
}