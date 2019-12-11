import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-card',
  templateUrl: './contract-card.component.html',
  styleUrls: ['./contract-card.component.css']
})
export class ContractCardComponent implements OnInit {
  public contractData: any;
  public productName: string;
  public sellerName: string;
  public companyName: string;
  public deliveryDate: Date;
  public creditPeriod: number;
  // panelOpenState = false;

  constructor(
  ) { }

  ngOnInit() {
  }


}
