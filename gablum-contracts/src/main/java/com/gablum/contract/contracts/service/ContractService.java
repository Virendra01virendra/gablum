package com.gablum.contract.contracts.service;

import com.gablum.contract.contracts.model.Contracts;
import com.gablum.contract.contracts.repository.ContractDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class ContractService {
    @Autowired
    private ContractDetailsRepository contractDetails;

    public Contracts getContractById(UUID contractsId){
        return contractDetails.findByContractId(contractsId);
    }

    public Contracts saveContract(Contracts contractToBeSaved){
        return contractDetails.save(contractToBeSaved);
    }

    public List<Contracts> getContractByBuyerId(UUID buyerId) {
        return contractDetails.findByBuyerId(buyerId);
    }
    @Transactional

    public Contracts updateContract (UUID contractWhichNeedsTobeInvalidated ,Contracts contractUpdate){
        Contracts updatedContract = contractDetails.findByContractId(contractWhichNeedsTobeInvalidated);
        updatedContract.setContractStatus(contractUpdate.getContractStatus());
        return contractDetails.save(updatedContract);
        }

}
