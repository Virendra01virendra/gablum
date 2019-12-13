import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ContractDetail } from 'src/app/interfaces/contract-detail';
import { ContractsDataService } from 'src/app/services/contracts-data.service';
import { Auction } from 'src/app/interfaces/auction';
import { Proposal } from 'src/app/interfaces/proposal';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { NewBid } from 'src/app/interfaces/newbid';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {

  public static messagekey = 'ContractDetail';
  public contract: ContractDetail;
  public auctionDetails: Auction;
  public proposal: Proposal;
  public productName: string;
  public sellerName: string;
  public bidDetails: NewBid;
  public toBeDisplayed: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ContractDetail,
    private matDialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private contractService: ContractsDataService
  ) {
    this.contract = data;
    this.auctionDetails = this.contract.auctionDetails;
    this.proposal = this.auctionDetails.proposal;
    this.productName = this.proposal.productName;
    this.bidDetails = this.contract.bidDetails;
    this.sellerName = this.bidDetails.createdBy;
  }

  ngOnInit() {}
}
