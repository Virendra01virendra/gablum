package com.gablum.contract.contracts.service;

import com.gablum.contract.contracts.model.Contracts;
import com.gablum.contract.contracts.repository.ContractDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
@Service
public class ContractService {
    @Autowired
    private ContractDetailsRepository contractDetails;

    public Contracts getContractById(String contractsId){
        return contractDetails.findByContractId(contractsId);
    }

    public Contracts saveContract(Contracts contractToBeSaved){
        return contractDetails.save(contractToBeSaved);
    }

    public List<Contracts> getContractByBuyerId(String buyerId) {
        return contractDetails.findByBuyerId(buyerId);
    }
    public List<Contracts> getContractBySellerId(String sellerId){
        return contractDetails.findBySellerId(sellerId);
    }
//    @Transactional
//    public Contracts updateContract (String contractWhichNeedsTobeInvalidated ,Contracts contractUpdate){
//        Contracts updatedContract = contractDetails.findByContractId(contractWhichNeedsTobeInvalidated);
//        updatedContract.setContractStatus(contractUpdate.getContractStatus());
//        return contractDetails.save(updatedContract);
//        }

}
