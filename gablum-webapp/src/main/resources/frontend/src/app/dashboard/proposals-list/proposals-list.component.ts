import { Component, OnInit } from '@angular/core';
import { Proposal } from 'src/app/interfaces/proposal';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';

@Component({
  selector: 'app-proposals-list',
  templateUrl: './proposals-list.component.html',
  styleUrls: ['./proposals-list.component.css']
})
export class ProposalsListComponent implements OnInit {

  public static messageKey = 'proposals-list-component';

  public proposals: Proposal[];

  constructor(
    private proposalDataService: ProposalsDataService,
    private comms: CommunicatorService
    ) {
      comms.getMessages().subscribe(msg => {
        if (msg.dest === ProposalsListComponent.messageKey || msg.dest === '@all') {
          const data = msg.data;

          if ('proposals' in data) {
            this.proposals = data.proposals;
            console.log(this.proposals);
          }
        }
      });
    }

  ngOnInit() {
    this.proposalDataService.getAllProposals(ProposalsListComponent.messageKey, 'proposals');
  }
}
