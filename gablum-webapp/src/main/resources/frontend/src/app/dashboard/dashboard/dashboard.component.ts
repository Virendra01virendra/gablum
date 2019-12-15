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
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { Profile } from 'src/app/interfaces/profile';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public static messageKey = 'DashboardComponent';
  public buttonName = 'BUYERS VIEW';
  public show = true;

  public isLoggedIn = false;
  public isBuyer;
  public isSeller;
  public userRole = new Array();

  public userProfile: Profile;
  proposals: Proposal[];
  allProposals: Proposal[];
  auctions: Auction[];
  oldAuctions: Auction[];
  auctionsBuyer: Auction[];
  auctionsSeller: Auction[];
  pastAuctions: Proposal[];
  public businessSubdomain: string;
  public auctionsNotEmpty = true;
  public oldAuctionsNotEmpty = true;
  // public dashboardSections: DashboardSection[] = [
  //   { label: 'Ongoing Auctions', desc: 'Currently running auctions', icon: '', data: this.auctions, isActive: true },
  //   { label: 'Active Proposals', desc: 'Proposals currently active', icon: '', data: this.proposals },
  //   { label: 'Past Auctions', desc: 'Your past auctions', icon: '', data: this.proposals },
  // ];

  // public dashboardSections1: DashboardSection[] = [
  //   { label: 'Ongoing Auctions', desc: 'Currently running auctions', icon: '', data: this.auctions, isActive: true },
  //   { label: 'Active Proposals(Buyer)', desc: 'Proposals floated by you', icon: '', data: this.proposals },
  //   { label: 'Past Auctions', desc: 'Your past auctions', icon: '', data: this.proposals },
  //   { label: 'Active Proposals(Seller)', desc: 'Proposals floated by others recently', icon: '', data: this.proposals }];

  public bids: NewBid[] = [];
  data;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    public dialog: MatDialog,
    private ws: WebsocketService,
    private user: ProfileDataService,
    private proposalDataService: ProposalsDataService,
    private auctionDataService: AuctionsDataService,
    private comms: CommunicatorService,
    private router: Router,
    private logger: LoggerService,
    private auth: AuthenticationService,
    public http: HttpClient
  ) {
    // this.isLoggedIn = auth.getAuthenticated();
    // if (this.isLoggedIn) {
    //   this.logger.log(this, auth.getProfileData());
    // }
    comms.getMessages().subscribe(msg => {
      if (msg.dest === DashboardComponent.messageKey || msg.dest === '@all') {
        const data = msg.data;

        if ('proposals' in data) {
          this.proposals = data.proposals;
        }

        if ('sellerProposals' in data) {
          this.allProposals = data.sellerProposals;
        }


        if ('auctionsSeller' in data) {
          this.auctionsSeller = data.auctionsSeller;
          // console.log('auctionnnnnsellllllllllllre--->', this.auctionsSeller);
          // if (this.isSeller === true) {
          //   console.log('sseleeleleleleleleleleeeeeeeeeeeeerrrrr');
          //
          // }
        }

        if ('auctionsSellerOnly' in data) {
          this.auctionsSeller = data.auctionsSellerOnly;
          // console.log('auctionnnnnsellllllllllllre--->', this.auctionsSeller);
          // if (this.isSeller === true) {
          //   console.log('sseleeleleleleleleleleeeeeeeeeeeeerrrrr');
          //
          // }
          this.auctions = this.auctionsSeller;
          if (this.auctions.length !== 0) {
            this.auctionsNotEmpty = true;
          } else {
            this.auctionsNotEmpty = false;
          }
        }



        if ('auctionsBuyer' in data) {
          this.auctionsBuyer = data.auctionsBuyer;
          this.auctions = this.auctionsBuyer;
          if (this.auctions.length !== 0) {
            this.auctionsNotEmpty = true;
          } else {
            this.auctionsNotEmpty = false;
          }
          console.log('auctionnnnnnsbbbuuyyer------>', this.auctionsBuyer);
        }


        if ('authChanged' in data) {
          this.isLoggedIn = auth.getAuthenticated();
          // this.logger.log(this, auth.getProfileData());
        }

        if ('userProfile' in data) {
          // getting user profile for subDomain
          this.userProfile = data.userProfile;
          this.businessSubdomain = this.userProfile.businessSubDomain;
          this.proposalDataService.getProposalsBySubDomain(
            this.businessSubdomain,
            DashboardComponent.messageKey,
            'sellerProposals'
          );
          this.userRole = this.userProfile.role;
          // console.log(this.userProfile.role[0]);
          // console.log(this.userProfile.role[1]);
          if (this.userProfile.role.length === 1) {
            if (this.userProfile.role[0].role === 'seller') {
              this.isSeller = true;
              this.isBuyer = false;
              this.auctionDataService.getAllAuctionsSeller(
                DashboardComponent.messageKey,
                'auctionsSellerOnly'
              );
            } else {
              this.isSeller = false;
              this.isBuyer = true;
            }
          } else {
            this.isBuyer = true;
            this.isSeller = true;
          }
        }

        if ('oldAuctions' in data) {
          this.oldAuctions = data.oldAuctions;
          console.log('olllddd auctions', this.oldAuctions);
          if (this.oldAuctions.length !== 0) {
            this.oldAuctionsNotEmpty = true;
          } else {
            this.oldAuctionsNotEmpty = false;
          }
        }
        // console.log(this.isBuyer);
        // console.log(this.isSeller);
      }
    });
  }

  ngOnInit() {
    // this.ws.connect(message => this.subscribe());
    this.proposalDataService.getProposalsBySubDomain(
      this.businessSubdomain,
      DashboardComponent.messageKey,
      'sellerProposals'
    );
    this.proposalDataService.getAllProposals(
      DashboardComponent.messageKey,
      'proposals'
    );
    this.user.getUserProfileByEmail(
      DashboardComponent.messageKey,
      'userProfile'
    );


    this.auctionDataService.getAllAuctionsBuyer(
      DashboardComponent.messageKey,
      'auctionsBuyer'
    );


    this.auctionDataService.getAllAuctionsSeller(
        DashboardComponent.messageKey,
        'auctionsSeller'
      );

    this.auctionDataService.getOldAuctions(
      DashboardComponent.messageKey,
      'oldAuctions'
      );
  }

  send() {
    this.ws.sendBid({ price: 100 });
  }

  openDialog(proposal: Proposal) {
    this.dialog.open(ProposalCardDialogComponent, {
      width: '60%',
      height: '60%',
      data: { proposal }
    });
  }

  // doStuff(proposal: Proposal) {
  //   this.dialog.open(DetailsDialogComponent, {data: proposal});
  // }
  startAuction(proposal1: Proposal) {
    const auction = {
      auctionName: proposal1.productName,
      proposal: proposal1,
      isAuctionActive: true,
      interestedUsersEmail: proposal1.interestedUsersEmail
    };
    const auctionList = [];
    auctionList.push(auction);

    this.data = JSON.parse(JSON.stringify(auctionList));

    this.auctionDataService.saveAuction(
      DashboardComponent.messageKey,
      this.data,
      'save-auction'
    );
  }
  switch() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'BUYERS VIEW';
      this.auctions = this.auctionsBuyer;
      if (this.auctions.length !== 0) {
        this.auctionsNotEmpty = true;
      } else {
        this.auctionsNotEmpty = false;
      }

    } else {
      this.buttonName = 'SELLERS VIEW';
      this.auctions = this.auctionsSeller;
      if (this.auctions.length !== 0) {
        this.auctionsNotEmpty = true;
      } else {
        this.auctionsNotEmpty = false;
      }
    }
  }
}
