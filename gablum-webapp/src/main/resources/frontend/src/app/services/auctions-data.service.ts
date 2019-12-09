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
  auctionUrlForSingle;

  constructor(
    private comms: CommunicatorService,
    private networking: NetworkingService
    ) {
      this.auctionsUrl = environment.auctionUrl;
     }

    getAllAuctions(dest, key) {
      this.networking.getData<Auction>(this.auctionsUrl, dest, key);
    }

    getAuctionById(dest, key, auctionId) {
      this.auctionUrlForSingle = this.auctionsUrl + '/' + auctionId;
      this.networking.getData<Auction>(this.auctionUrlForSingle, dest, key);
    }

    saveAuction(dest, data, key) {
      this.networking.postData(this.auctionsUrl, dest, data, key);
    }

    saveBid(dest, data, key, auctionId) {
      this.bidUrl = this.auctionsUrl + '/' + auctionId + '/bid';
      this.networking.postData(this.bidUrl, dest, data, key);
    }

    getScore(dest, data, key, auctionId) {
      this.bidUrl = this.auctionsUrl + '/' + auctionId + '/bid/score';
      this.networking.postData(this.bidUrl, dest, data, key);
    }

    getBidsAuction(dest, key, auctionId) {
      this.bidUrl = this.auctionsUrl + '/' + auctionId + '/bid';
      this.networking.getData(this.bidUrl, dest, key);
    }

    saveWinningBid(dest, data, key, auctionId) {
      this.bidUrl = this.auctionsUrl + '/' + auctionId + 'bid/end';
      this.networking.patchData(this.bidUrl, dest, data, key);
    }
}
