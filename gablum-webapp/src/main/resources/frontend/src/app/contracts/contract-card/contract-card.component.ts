import { Component, OnInit, Input } from '@angular/core';
import { ContractsDataService } from 'src/app/services/contracts-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  public contractData: ContractDetail;
  public productName: string;
  public sellerName: string;
  public companyName: string;
  public deliveryDate: Date;
  public creditPeriod: number;
  private dialog: MatDialog;
  
  // panelOpenState = false;
  public SellerEmail: string;
  public BuyerEmail: string;
  @Input() public contract: ContractDetail;

  public profileUrl: string;
  public profile: User;

  constructor(
    public contractDataService: ContractsDataService,
    private comms: CommunicatorService,
    private route: ActivatedRoute,
    private router: Router,
    private logger: LoggerService,
    private profileDataService: ProfileDataService
  ) {
    comms.getMessages().subscribe(msg => {
      if (msg.dest === ContractCardComponent.messageKey || msg.dest === '@all') {
        const data = msg.data;
        if ('otherUser' in data) {
          this.profile = data.userProfile;
        }
        console.log(this.profile);
      }
    });
  }

  ngOnInit() {
    const contractsUrl = environment.contractsUrl;
    this.profileUrl = environment.profileUrl;
    // this.logger.log(contractsUrl);

    this.profileUrl = environment.profileUrl;
    if (this.contract.sellerEmail == null) {
      this.SellerEmail = this.contract.bidDetails.createdBy;
      this.profileUrl = this.profileUrl + '/' + this.SellerEmail;
    } else {
      this.BuyerEmail = this.contract.auctionDetails.createdBy;
      this.profileUrl = this.profileUrl + '/' + this.BuyerEmail;
    }

    this.profileDataService.getUserProfileByEmailWithUrl(
      this.profileUrl, ContractCardComponent.messageKey, 'otherUser');
  }

  openDialog(contract: ContractDetail) {
    this.dialog.open(ContractDetailComponent, {
      // width: '60%',
      // height: '60%',
      data: contract
    });
  }

}
