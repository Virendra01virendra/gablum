package com.gablum.contract.contracts.controller;

import com.gablum.contract.contracts.model.Contracts;
import com.gablum.contract.contracts.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContractsController {
    @Autowired
    private ContractService contractService;

    @GetMapping("/contracts/{contractsId}")
    public Contracts getContract(@PathVariable String contractId){
        return contractService.getContractById(contractId);
    }
    @GetMapping("/contracts/forBuyer")
    public List<Contracts> getContractByBuyerEmail(@RequestParam String email){
        return contractService.getContractByBuyerEmail(email);
    }

    @GetMapping("/contracts/forSeller")
    public List<Contracts> getContractBySellerEmail(@RequestParam String email){
        return contractService.getContractBySellerEmail(email);
    }

    @PostMapping("/contracts")
    public Contracts saveContract(@RequestBody Contracts contracts){
        return contractService.saveContract(contracts);
    }

//    @PatchMapping("/contracts/{contractsId}")
//    public Contracts updateContractStatus(@PathVariable String contractId, @RequestBody Contracts contractToEdit){
//        return contractService.updateContract(contractId, contractToEdit);
//    }
}