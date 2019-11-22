import { Injectable } from '@angular/core';
import { CommunicatorService } from './communicator.service';
import { NetworkingService } from './networking.service';
import { ContractDetail } from '../interfaces/contract-detail';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractsDataService {

  public url = environment.contractUrl;
  constructor(
    private comms: CommunicatorService,
    private networking: NetworkingService
  ) { }

  getAllContracts(dest, key) {
    this.networking.getData<ContractDetail>(this.url, dest, key);
  }
}
