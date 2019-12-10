import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialogRef
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommunicatorService } from 'src/app/services/communicator.service';


@Component({
  selector: 'app-winning-bid-dialog',
  templateUrl: './winning-bid-dialog.component.html',
  styleUrls: ['./winning-bid-dialog.component.css']
})
export class WinningBidDialogComponent {

  public static messageKey = 'WinningBidDialogComponent';
  constructor() { }

  

}
