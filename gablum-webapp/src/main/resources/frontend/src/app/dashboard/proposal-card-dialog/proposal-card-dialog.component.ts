import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Proposal } from 'src/app/interfaces/proposal';
import { Auction } from 'src/app/interfaces/auction';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { AuctionStartDialogComponent } from 'src/app/auction/auction-start-dialog/auction-start-dialog.component';
import { SellersListDialogComponent } from '../sellers-list-dialog/sellers-list-dialog.component';
import { ExtendProposalDialogComponent } from '../extend-proposal-dialog/extend-proposal-dialog.component';

@Component({
  selector: 'app-proposal-card-dialog',
  templateUrl: './proposal-card-dialog.component.html',
  styleUrls: ['./proposal-card-dialog.component.css']
})
export class ProposalCardDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auctionDataService: AuctionsDataService,
    private matDialog: MatDialog
    ) { }
  public static messageKey = 'ProposalCardDialog';
  auctions: Auction[];
  data1;

  ngOnInit() {
  }

  startAuction(proposal1: Proposal) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = proposal1;
    dialogConfig.width = '40%';
    this.matDialog.open(AuctionStartDialogComponent, dialogConfig);
  }

  sellersListDialog() {
    this.matDialog.open(SellersListDialogComponent, { data: this.data });
  }

  extendDialog() {
    this.matDialog.open(ExtendProposalDialogComponent, { data: this.data });
  }

}
