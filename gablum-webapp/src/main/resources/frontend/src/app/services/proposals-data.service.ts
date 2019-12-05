import { Injectable } from '@angular/core';
import { CommunicatorService } from './communicator.service';
import { NetworkingService } from './networking.service';
import { Proposal } from '../interfaces/proposal';
import { environment } from 'src/environments/environment';
// import { timingSafeEqual } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class ProposalsDataService {

  public proposalsUrl: string;
  public guestProposallistUrl: string;

  constructor(
    private comms: CommunicatorService,
    private networking: NetworkingService
    ) {
      this.proposalsUrl = environment.proposalUrl;
      this.guestProposallistUrl = environment.guestProposallistUrl;
    }

    saveProposal(dest, data, key) {
      this.networking.postData<Proposal>(this.proposalsUrl, dest, data, key);
    }

    getAllProposals(dest, key) {
      this.networking.getData<Proposal>(this.proposalsUrl, dest, key);
    }

    getAllProposalForGuest(dest, key) {
      this.networking.getData<Proposal>(this.guestProposallistUrl, dest, key);
    }
    postInterestedSeller(dest, data, key) {
      this.networking.patchData<Proposal>(this.proposalsUrl, dest, data, key);
    }
    deleteProposal(proposalId, dest, key) {
       const proposalUrlDel = this.proposalsUrl + '/' + proposalId;
       this.networking.deleteData<Proposal>(proposalUrlDel, dest, key);
    }
// extendProposal(dest, data, key) {
//   this.networking.patchData<Proposal>(this.proposalsUrl)
// }
}
