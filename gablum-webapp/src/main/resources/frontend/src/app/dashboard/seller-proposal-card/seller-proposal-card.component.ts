import { Component, OnInit, Input } from '@angular/core';
import { Proposal} from '../../interfaces/proposal';
import { MatDialog } from '@angular/material/dialog';
import { LoggerService } from '../../services/logger.service';
import { ProposalsDataService } from '../../services/proposals-data.service';
import { CommunicatorService } from '../../services/communicator.service';
import { ProposalCardDialogComponent } from '../proposal-card-dialog/proposal-card-dialog.component';

@Component({
  selector: 'app-seller-proposal-card',
  templateUrl: './seller-proposal-card.component.html',
  styleUrls: ['./seller-proposal-card.component.css']
})
export class SellerProposalCardComponent implements OnInit {

  public static messageKey = 'seller-proposal-card-component';
 alreadyRegistered = false;
  @Input() allProposal: Proposal;

  constructor(private proposalDataService: ProposalsDataService, private comms: CommunicatorService,
              private dialog: MatDialog,
              private logger: LoggerService) { }

  ngOnInit() {
  }

  shownInterest(allProposal: Proposal) {
    // const proposalId = element.proposalId;
    this.logger.log('some data which we are publishing ');
    this.alreadyRegistered = true;
    this.proposalDataService.postInterestedSeller(SellerProposalCardComponent.messageKey, allProposal, 'interestedSellers');
  }

  openDialog(allProposal: Proposal) {
    this.dialog.open(ProposalCardDialogComponent, {
      width: '60%',
      height: '60%',
      data: allProposal
    });
  }
}
