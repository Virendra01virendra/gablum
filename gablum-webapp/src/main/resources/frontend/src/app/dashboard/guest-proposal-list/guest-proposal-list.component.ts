import { Component, OnInit } from '@angular/core';
import { Proposal } from 'src/app/interfaces/proposal';
// import { MatDialog } from '@angular/material';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-guest-proposal-list',
  templateUrl: './guest-proposal-list.component.html',
  styleUrls: ['./guest-proposal-list.component.css']
})
export class GuestProposalListComponent implements OnInit {
  public static messageKey = 'GuestProposalListComponent';

  proposals: Proposal[];
  constructor(
    private proposalDataService: ProposalsDataService,
    private comms: CommunicatorService,
    private logger: LoggerService
    ) {
      comms.getMessages().subscribe(msg => {
        if (msg.dest === GuestProposalListComponent.messageKey || msg.dest === '@all') {
          const data = msg.data;

          if ('proposals' in data) {
            this.proposals = data.proposals;
            this.logger.log(this.proposals);
          }
        }
      });
     }

  ngOnInit() {
    this.proposalDataService.getAllProposalForGuest(GuestProposalListComponent.messageKey, 'proposals');
  }
}
