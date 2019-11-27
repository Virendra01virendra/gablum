import { Component, OnInit } from '@angular/core';
import { Proposal } from 'src/app/interfaces/proposal';
import { CommunicatorService } from 'src/app/services/communicator.service';

@Component({
  selector: 'app-proposals-list',
  templateUrl: './proposals-list.component.html',
  styleUrls: ['./proposals-list.component.css']
})
export class ProposalsListComponent implements OnInit {

  public static messageKey = 'proposals-list-component';

  public proposals: Proposal[];

  constructor(comms: CommunicatorService, ) { }

  ngOnInit() {
  }

}
