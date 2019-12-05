import { Injectable, OnInit } from '@angular/core';
import { CommunicatorService } from './communicator.service';
import { NetworkingService } from './networking.service';
import { Auction } from '../interfaces/auction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuctionsDataService {

  public auctionsUrl: string;
  bidUrl;

  constructor(
    private comms: CommunicatorService,
    private networking: NetworkingService
    ) {
      this.auctionsUrl = environment.auctionUrl;
     }

    getAllAuctions(dest, key) {
      this.networking.getData<Auction>(this.auctionsUrl, dest, key);
    }

    saveAuction(dest, data, key) {
      this.networking.postData(this.auctionsUrl, dest, data, key);
    }

    saveBid(dest, data, key, auctionId) {
      this.bidUrl = this.auctionsUrl + '/' + auctionId + '/bid';
      console.log('biiiiddddd', this.bidUrl);
      this.networking.postData(this.bidUrl, dest, data, key);
    }
}
