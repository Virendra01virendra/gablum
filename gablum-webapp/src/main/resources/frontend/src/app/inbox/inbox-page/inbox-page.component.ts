import { Component, OnInit } from '@angular/core';
import { Proposal } from 'src/app/interfaces/proposal';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { LoggerService } from 'src/app/services/logger.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-inbox-page',
  templateUrl: './inbox-page.component.html',
  styleUrls: ['./inbox-page.component.css']
})
export class InboxPageComponent implements OnInit {
  public static messageKey = 'InboxPageComponent';
  proposals: Proposal[];
  displayedColumns: string[] = ['productName', 'businessSubDomain', 'createdBy', 'quantity', 'view'];
  dataSource;
  userProfile: Profile;
  currentSubDomain;

  constructor(
    private comms: CommunicatorService,
    private proposalDataService: ProposalsDataService,
    private logger: LoggerService,
    private auth: AuthenticationService
    ) {
      comms.getMessages().subscribe(msg => {
        if (msg.dest === InboxPageComponent.messageKey || msg.dest === '@all' ) {
          const data = msg.data;
          if ('authChanged' in data) {
            this.currentSubDomain = auth.getProfileData().businessSubDomain;
            this.proposalDataService.getProposalsBySubDomain(this.currentSubDomain, InboxPageComponent.messageKey, 'proposals');

          }
          // this.userProfile = auth.getProfileData();
          // logger.log('user profile data --------->' , JSON.stringify(this.userProfile));
          // this.currentSubDomain = this.userProfile.businessSubDomain;
          // logger.log('current sub domain ------>', this.currentSubDomain);
          if ('proposals' in data) {
            this.proposals = data.proposals;
            logger.log('data from get api call for filtered data ---->' , this.proposals );
            this.dataSource = this.proposals;
          }
        }
      });
     }

  ngOnInit() {
  }

}
