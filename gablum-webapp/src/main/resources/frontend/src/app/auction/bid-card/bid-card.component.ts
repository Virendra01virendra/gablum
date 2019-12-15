import { Component, OnInit, Input } from '@angular/core';
import { NewBid } from 'src/app/interfaces/newbid';
import { NgxData } from 'src/app/interfaces/ngx-data';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { WinningBidDialogComponent } from '../winning-bid-dialog/winning-bid-dialog.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Auction } from 'src/app/interfaces/auction';
import { User } from 'src/app/interfaces/user';
import { Profile } from 'src/app/interfaces/profile';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { environment } from 'src/environments/environment';
import { ProfileDataService } from 'src/app/services/profile-data.service';



@Component({
  selector: 'app-bid-card',
  templateUrl: './bid-card.component.html',
  styleUrls: ['./bid-card.component.css']
})
export class BidCardComponent implements OnInit {
  constructor(
    private auctionDataService: AuctionsDataService,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private auth: AuthenticationService,
    private comms: CommunicatorService,
    private profileDataService: ProfileDataService
    ) {
      comms.getMessages().subscribe(msg => {
        if (msg.dest === BidCardComponent.messageKey || msg.dest === '@all') {
          const data = msg.data;
          if ('otherUser' in data) {
            this.otherUser = data.otherUser;  // panelOpenState = false;
          }
        }
      });
  }
  public static messageKey = 'BidCardComponent';
  public auctionId: string;
  public bidRank: number;
  public otherUser: Profile;
  public profileUrl = environment.profileUrl;
  @Input() public auction: Auction;
  @Input() public bidDataEntity: NewBid;

  public data: NgxData[];


  ngOnInit() {
    this.data = Object.keys(this.bidDataEntity.scoreObject).map(key => {
        return {name: key, value: this.bidDataEntity.scoreObject[key]};
    }).filter(item => item.name !== 'total');
    this.route.paramMap
      .subscribe((params: Params) => {
        this.auctionId = params.get('id');
      });
    this.profileUrl = this.profileUrl + '/' + this.bidDataEntity.createdBy;
    this.profileDataService.getUserProfileByEmailWithUrl(
        this.profileUrl, BidCardComponent.messageKey, 'otherUser');
  }

  openDialog(bidDataEntity1: NewBid) {
    const sellerEmail = bidDataEntity1.createdBy;
    const buyerEmail = this.auction.createdBy;
    const bidData = {
      bidDataEntity: bidDataEntity1,
      auctionID: this.auctionId
    };

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = bidData;
    dialogConfig.width = '40%';
    this.matDialog.open(WinningBidDialogComponent, dialogConfig);

  }

}
