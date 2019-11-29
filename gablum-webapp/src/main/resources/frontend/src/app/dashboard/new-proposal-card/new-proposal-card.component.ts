import { Component, OnInit, Input } from '@angular/core';
import { Proposal } from 'src/app/interfaces/proposal';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { ProposalsListComponent } from 'src/app/dashboard/proposals-list/proposals-list.component';

@Component({
  selector: 'app-new-proposal-card',
  templateUrl: './new-proposal-card.component.html',
  styleUrls: ['./new-proposal-card.component.css']
})
export class NewProposalCardComponent implements OnInit {

  constructor(
    private proposalDataService: ProposalsDataService,
    private comms: CommunicatorService
    ) {
      comms.getMessages().subscribe(msg => {
        if (msg.dest === NewProposalCardComponent.messageKey || msg.dest === '@all') {
          const data = msg.data;

          if ('proposals' in data) {
            this.proposals = data.proposals;
            console.log(this.proposals);
          }
        }
      });
    }

  public static messageKey = 'new-proposal-card-component';

  @Input() productName: string;
  @Input() price: number;
  @Input() deliveryDate: Date;
  @Input() quantity: number;

  public proposals: Proposal[];

  ngOnInit() {
    this.proposalDataService.getAllProposals(NewProposalCardComponent.messageKey, 'proposals');
  }
}
