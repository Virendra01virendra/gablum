import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ContractDetail } from 'src/app/interfaces/contract-detail';
import { ContractsDataService } from 'src/app/services/contracts-data.service';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css']
})
export class ContractDetailComponent implements OnInit {
  public contract: ContractDetail;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contractService: ContractsDataService
  ) { }

  ngOnInit() {
    this.contract = this.contractService.retrieveContract();
  }
}
