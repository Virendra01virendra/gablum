import { Component, OnInit,Input} from '@angular/core';
import { Auction } from 'src/app/interfaces/auction';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { AuctionsListComponent } from 'src/app/dashboard/auctions-list/auctions-list.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css']
})
export class AuctionCardComponent implements OnInit {

  constructor(
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private router: Router,
    ) {
      // comms.getMessages().subscribe(msg => {
      //   if (msg.dest === AuctionCardComponent.messageKey || msg.dest === '@all') {
      //     const data = msg.data;

      //     if ('auctions' in data) {
      //       this.auctions = data.auctions;
      //       console.log(this.auctions);
      //     }
      //   }
      // });
    }

  public static messageKey = 'auction-card-component';

  @Input() public auction: Auction;

  ngOnInit() {  }

  public participate(){
    this.router.navigate(['auctions/{auction.auctionId}/new/bid']);
  }

}
