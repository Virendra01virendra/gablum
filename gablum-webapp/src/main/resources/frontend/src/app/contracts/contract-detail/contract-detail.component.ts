import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ContractDetail } from 'src/app/interfaces/contract-detail';
import { ContractsDataService } from 'src/app/services/contracts-data.service';
import { Auction } from 'src/app/interfaces/auction';
import { Proposal } from 'src/app/interfaces/proposal';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  public contract: ContractDetail;
  public auctionDetails: Auction;
  public proposal: Proposal;
  public productName: string;
  public sellerName: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contractService: ContractsDataService
  ) {
    // this.contract = this.contractService.retrieveContract();
    // this.auctionDetails = this.contract.auctionDetails;
    // this.proposal = this.auctionDetails.proposal;
    // this.productName = this.proposal.productName;
  }

  ngOnInit() {}
}
