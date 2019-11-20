package com.gablum.contract.contracts.service;

import com.gablum.contract.contracts.model.ContractStatusEditable;
import com.gablum.contract.contracts.model.Contracts;
import com.gablum.contract.contracts.repository.ContractDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
public class ContractService {
    @Autowired
    private ContractDetailsRepository contractDetails;

    public Contracts getContractbyId(UUID contractsId){
        return contractDetails.findByContractsId(contractsId);
    }

    public Contracts saveContract(Contracts contractToBeSaved){
        return contractDetails.save(contractToBeSaved);
    }

    @Transactional
    public Contracts updateContract (UUID contractWhichNeedsTobeInvalidated ,ContractStatusEditable contractUpdate){
        Contracts updatedContract = contractDetails.findByContractsId(contractWhichNeedsTobeInvalidated);
        updatedContract.setContractsId(contractWhichNeedsTobeInvalidated);
        updatedContract.setContractStatus(contractUpdate.getContractStatus());
        return contractDetails.save(updatedContract);
        }
}
