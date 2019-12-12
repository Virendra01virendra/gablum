import { Component, OnInit, Input } from '@angular/core';
import { ContractsDataService } from 'src/app/services/contracts-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LoggerService } from 'src/app/services/logger.service';
import { ContractDetail } from 'src/app/interfaces/contract-detail';
import { environment } from 'src/environments/environment';
import { ContractDetailComponent } from '../contract-detail/contract-detail.component';
import { ProfileDataService } from 'src/app/services/profile-data.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.css']
})
export class ContractCardComponent implements OnInit {

  public static messageKey = 'contract-card-component';
  public contractData: any;
  public productName: string;
  public sellerName: string;
  public companyName: string;
  public deliveryDate: Date;
  public creditPeriod: number;
  private dialog: MatDialog;
  private profileDataService: ProfileDataService;
  // panelOpenState = false;

  constructor(
    public contractDataService: ContractsDataService,
    private comms: CommunicatorService,
    private router: Router,
    private logger: LoggerService,
    public profileUrl: string,
    public profile: User
  ) {
    if (this.contract.buyerEmail != null) {
      this.profileUrl = this.profileUrl + 's/' + this.contract.buyerEmail;
    } else {
      this.profileUrl = this.profileUrl + 's/' + this.contract.sellerEmail;
    }
    comms.getMessages().subscribe(msg => {
      if (msg.dest === ContractCardComponent.messageKey || msg.dest === '@all') {
        const data = msg.data;

        if ('userProfile' in data) {
          this.profile = data.userProfile;
        }
        console.log(this.profile);
      }
    });
  }

  @Input() public contract: ContractDetail;

  ngOnInit() {
    const contractsUrl = environment.contractsUrl;
    this.profileUrl = environment.profileUrl;
    this.logger.log(contractsUrl);
    this.profileDataService.getUserProfileByEmailWithUrl(
      this.profileUrl,
      ContractCardComponent.messageKey,
      'userProfile'
    );
  }

  openDialog(contract: ContractDetail) {
    this.dialog.open(ContractDetailComponent, {
      // width: '60%',
      // height: '60%',
      data: contract
    });
  }

}
