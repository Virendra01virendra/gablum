package com.gablum.contract.contracts.controller;

import com.gablum.contract.contracts.model.Contracts;
import com.gablum.contract.contracts.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ContractsController {
    @Autowired
    private ContractService contractService;

    @GetMapping("/contracts/{contractsId}")
    public Contracts getContract(@PathVariable String contractId){
        return contractService.getContractById(contractId);
    }
    @GetMapping("/contracts")
    public List<Contracts> getContractByBuyerIdOrSellerId(@RequestParam String id){
        List<Contracts> totalContracts = new ArrayList<Contracts>();
        List<Contracts> buyerContracts = contractService.getContractByBuyerId(id);
        for(int i=0; i<buyerContracts.size(); i++){
            totalContracts.add(buyerContracts.get(i));
        }
        List<Contracts> sellerContracts = contractService.getContractBySellerId(id);
        for(int i =0; i<sellerContracts.size(); i++){
            totalContracts.add(sellerContracts.get(i));
        }
        return totalContracts;
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