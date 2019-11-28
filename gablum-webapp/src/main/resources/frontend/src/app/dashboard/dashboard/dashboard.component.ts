import { Component, OnInit, Input } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { DashboardSection } from 'src/app/interfaces/dashboard-section';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Proposal } from 'src/app/interfaces/proposal';
import { Auction } from 'src/app/interfaces/auction';
import { NewProposalCardComponent } from '../new-proposal-card/new-proposal-card.component';

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

  public bids = [];
  public testBid = {
    seller: 'A GLorious Seller',
    price: 100,
    unitPrice: 12.5,
    rank: 2,
    scores: {
      one: 4,
      two: 7,
      three: 6
    },
    totalScore: 17,
    profileUrl: 'https://picsum.photos/400/400'
  };

  constructor(private ws: WebsocketService, private proposalDataService: ProposalsDataService, private comms: CommunicatorService) {
    comms.getMessages().subscribe(msg => {
      if (msg.dest === DashboardComponent.messageKey || msg.dest === '@all') {
        const data = msg.data;

        if ('proposals' in data) {
          this.proposals = data.proposals;
          console.log(this.proposals);
          this.dashboardSections[1].data = this.proposals;
        }
      }
    });
  }

  ngOnInit() {
    this.ws.connect(message => this.subscribe());
    this.proposalDataService.getAllProposals(DashboardComponent.messageKey, 'proposals');

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
            console.log(data.newbid);
            this.bids.push(this.testBid);
          }
        }
      });
  }

}
