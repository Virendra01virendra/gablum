import { Component, OnInit, Input } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { NewBid } from 'src/app/interfaces/newbid';
import { DashboardSection } from 'src/app/interfaces/dashboard-section';
import { LoggerService } from 'src/app/services/logger.service';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Proposal } from 'src/app/interfaces/proposal';
import { Auction } from 'src/app/interfaces/auction';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProposalCardDialogComponent } from '../proposal-card-dialog/proposal-card-dialog.component';
// import { TimerComponent } from './../../scheduler/timer/timer.component';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public static messageKey = 'DashboardComponent';

  proposals: Proposal[];
  auctions: Auction[];
  pastAuctions: Proposal[];
  public dashboardSections: DashboardSection[] = [
    { label: 'Ongoing Auctions', desc: 'Currently running auctions', icon: '', data: this.auctions, isActive: true },
    { label: 'Active Proposals', desc: 'Proposals currently active', icon: '', data: this.proposals },
    { label: 'Past Auctions', desc: 'Your past auctions', icon: '', data: this.proposals },
  ];

  public bids: NewBid[] = [];
  data;
  url = 'http://localhost:8080/auctions/auctions';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(
    public dialog: MatDialog,
    private ws: WebsocketService,
    private proposalDataService: ProposalsDataService,
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private router: Router,
    private logger: LoggerService,
    public http: HttpClient,
    ) {
    comms.getMessages().subscribe(msg => {
      if (msg.dest === DashboardComponent.messageKey || msg.dest === '@all') {
        const data = msg.data;

        if ('proposals' in data) {
          this.proposals = data.proposals;
          this.logger.log(this.proposals);
          this.dashboardSections[1].data = this.proposals;

        }

        if ('auctions' in data) {
          this.auctions = data.auctions;
          this.logger.log(this.auctions);
          this.dashboardSections[0].data = this.auctions;
        }
      }
    });
  }

  ngOnInit() {
    this.ws.connect(message => this.subscribe());
    this.proposalDataService.getAllProposals(DashboardComponent.messageKey, 'proposals');
    this.auctionDataService.getAllAuctions(DashboardComponent.messageKey, 'auctions');

  }


  send() {
    this.ws.sendBid({ price: 100 });
  }

  subscribe() {
    this.ws.subscribe(
      '/topic/newbid',
      DashboardComponent.messageKey,
      'newbid').subscribe(message => {
        if (message.dest === '@all' || message.dest === DashboardComponent.messageKey) {
          const data = message.data;
          if ('newbid' in data) {
            this.logger.log(data.newbid.body);
            // this.bids.push(this.testBid);
          }
        }
      });
  }
  sellersListDialog(proposal: Proposal) {
    this.dialog.open(ProposalCardDialogComponent, { data: proposal});

  }

  startAuction(proposal1: Proposal) {
    const auction = {
      auctionName: proposal1.productName,
      proposal: proposal1,
      isAuctionActive: true
    };
    const auctionList = [];
    auctionList.push(auction);

    this.data = JSON.parse(JSON.stringify(auctionList));

  //   this.http.post<any>(this.url, this.data, this.httpOptions).subscribe((response) => {
  //   console.log('response ::', response);
  // });

    this.auctionDataService.saveAuction(DashboardComponent.messageKey, this.data, 'save-auction');

  }
}
