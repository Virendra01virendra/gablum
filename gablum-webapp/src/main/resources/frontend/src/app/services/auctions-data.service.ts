import { Injectable, OnInit } from '@angular/core';
import { CommunicatorService } from './communicator.service';
import { NetworkingService } from './networking.service';
import { Auction } from '../interfaces/auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionsDataService {

  public auctionsUrl = 'http://localhost:8080/auctions';

  constructor(
    private comms: CommunicatorService,
    private networking: NetworkingService
    ) { }

    getAllAuctions(dest, key) {
      this.networking.getData<Auction>(this.auctionsUrl, dest, key);
    }
}
