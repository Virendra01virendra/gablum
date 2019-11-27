import { Injectable } from '@angular/core';
import { CommunicatorService } from './communicator.service';
import { NetworkingService } from './networking.service';
import { Proposal } from '../interfaces/proposal';

@Injectable({
  providedIn: 'root'
})
export class ProposalsDataService {

  public proposalsUrl = 'http://localhost:8080/api/proposals/proposals';

  constructor(
    private comms: CommunicatorService,
    private networking: NetworkingService
    ) { }

    saveProposal(dest, data, key) {
      this.networking.postData<Proposal>(this.proposalsUrl, dest, data, key);
    }

    getAllProposals(dest, key) {
      this.networking.getData<Proposal>(this.proposalsUrl, dest, key);
    }
}
