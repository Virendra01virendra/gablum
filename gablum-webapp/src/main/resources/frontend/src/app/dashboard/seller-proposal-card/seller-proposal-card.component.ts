import { Component, OnInit, Input } from '@angular/core';
import { Proposal } from '../../interfaces/proposal';
import { MatDialog } from '@angular/material/dialog';
import { LoggerService } from '../../services/logger.service';
import { ProposalsDataService } from '../../services/proposals-data.service';
import { CommunicatorService } from '../../services/communicator.service';
import { ProposalCardDialogComponent } from '../proposal-card-dialog/proposal-card-dialog.component';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Profile } from 'src/app/interfaces/profile';
import { all } from 'q';

@Component({
  selector: 'app-seller-proposal-card',
  templateUrl: './seller-proposal-card.component.html',
  styleUrls: ['./seller-proposal-card.component.css']
})
export class SellerProposalCardComponent implements OnInit {

  public static messageKey = 'seller-proposal-card-component';
  public isLoggedIn = false;
  public isBuyer = false;
  public isSeller = false;
  public profile: Profile;
  @Input() allProposal: Proposal;

  constructor(private proposalDataService: ProposalsDataService, private comms: CommunicatorService,
              private dialog: MatDialog,
              private logger: LoggerService,
              private auth: AuthenticationService
             ) {
              comms.getMessages().subscribe(msg => {
                if (msg.dest === SellerProposalCardComponent.messageKey || msg.dest === '@all') {
                  const data = msg.data;

                  if ('authChanged' in data) {
                    this.isLoggedIn = auth.getAuthenticated();
                    this.logger.log('maakivhiooo--->' + auth.getProfileData());
                    this.profile = auth.getProfileData();
                    this.isBuyer = auth.isBuyer();
                    this.isSeller = auth.isSeller();
                  }
              }
            });
          }

  ngOnInit() {
  }

  shownInterest(allProposal: Proposal) {
    // const proposalId = element.proposalId;
    this.logger.log('some data which we are publishing ');
    this.proposalDataService.postInterestedSeller(SellerProposalCardComponent.messageKey, allProposal, 'interestedSellers');
  }

  openDialog(allProposal: Proposal) {
    this.dialog.open(ProposalCardDialogComponent, {
      // width: '60%',
      // height: '60%',
      data: allProposal
    });
  }
}
