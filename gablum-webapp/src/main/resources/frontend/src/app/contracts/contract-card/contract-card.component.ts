import { Component, OnInit, Input } from '@angular/core';
import { ContractsDataService } from 'src/app/services/contracts-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';
import { ContractDetail } from 'src/app/interfaces/contract-detail';
import { environment } from 'src/environments/environment';

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
  // panelOpenState = false;

  constructor(
    public contractDataService: ContractsDataService,
    private comms: CommunicatorService,
    private router: Router,
    private logger: LoggerService
  ) { }

  @Input() public contract: ContractDetail;

  ngOnInit() {
    const contractsUrl = environment.contractsUrl;
    this.logger.log(contractsUrl);
  }


}
