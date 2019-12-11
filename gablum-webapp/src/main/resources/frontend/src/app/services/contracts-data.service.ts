import { Injectable } from '@angular/core';
import { CommunicatorService } from './communicator.service';
import { NetworkingService } from './networking.service';
import { ContractDetail } from '../interfaces/contract-detail';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractsDataService {
  public contract: ContractDetail;
  public buyerUrl = environment.contractBuyerUrl;
  public sellerUrl = environment.contractSellerUrl;
  constructor(
    private comms: CommunicatorService,
    private networking: NetworkingService
  ) { }

  getBuyerContracts(dest, key) {
    this.networking.getData<ContractDetail>(this.buyerUrl, dest, key);
  }
  getSellerContracts(dest, key) {
    this.networking.getData<ContractDetail>(this.sellerUrl, dest, key);
  }

  saveContract(contractDetail: ContractDetail){
    this.contract = contractDetail;
  }
  retrieveContract(){
    return this.contract;
  }
}
