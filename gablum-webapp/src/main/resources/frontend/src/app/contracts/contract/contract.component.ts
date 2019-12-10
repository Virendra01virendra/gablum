import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { NetworkingService } from 'src/app/services/networking.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  public contractData: any;
  public productName: string;
  public sellerName: string;
  public companyName: string;
  public deliveryDate: Date;
  public creditPeriod: number;
  // panelOpenState = false;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor(
  ) { }

  ngOnInit() {
  }

}
