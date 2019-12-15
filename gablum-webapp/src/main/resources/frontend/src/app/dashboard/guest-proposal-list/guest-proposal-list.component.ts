import { Component, OnInit } from '@angular/core';
import { Proposal } from 'src/app/interfaces/proposal';
// import { MatDialog } from '@angular/material';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { LoggerService } from 'src/app/services/logger.service';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { environment } from 'src/environments/environment';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-guest-proposal-list',
  templateUrl: './guest-proposal-list.component.html',
  styleUrls: ['./guest-proposal-list.component.css']
})
export class GuestProposalListComponent implements OnInit {
  public static messageKey = 'GuestProposalListComponent';
  proposals: Proposal[];
  displayedColumns: string[] = ['productName', 'businessSubDomain', 'createdBy', 'quantity', 'showInterest'];
  dataSource;
  alreadyRegistered = false;
  profileUrl: string;
  public profile: Profile;
  public profileList = new Array();

  constructor(
    private proposalDataService: ProposalsDataService,
    private comms: CommunicatorService,
    private logger: LoggerService,
    public profileDataService: ProfileDataService
    ) {
      comms.getMessages().subscribe(msg => {
        if (msg.dest === GuestProposalListComponent.messageKey || msg.dest === '@all') {
          const data = msg.data;
          logger.log('Response from api', msg);
          if ('proposals' in data) {
            this.proposals = data.proposals;
            this.logger.log(this.proposals.toString);
            this.dataSource = this.proposals;
          }
          if ('otherUser' in data) {
            this.profile = data.otherUser;
            this.profileList.push(this.profile);
          }
        }
      });
     }

  ngOnInit() {
    this.proposalDataService.getAllProposalForSeller(GuestProposalListComponent.messageKey, 'proposals');
    let i = 0;
    for ( ; i < this.dataSource.size(); i++) {
      this.profileUrl = environment.profileUrl + '/' + this.dataSource[i];
      this.profileDataService.getUserProfileByEmailWithUrl( this.profileUrl, GuestProposalListComponent.messageKey , 'otherUser');
    }
  }
  shownInterest(element) {
    // const proposalId = element.proposalId;
    this.logger.log('some data which we are publishing ' , element );
    // this.alreadyRegistered = true;
    this.proposalDataService.postInterestedSeller(GuestProposalListComponent.messageKey, element , 'interestedSellers');
  }
}
