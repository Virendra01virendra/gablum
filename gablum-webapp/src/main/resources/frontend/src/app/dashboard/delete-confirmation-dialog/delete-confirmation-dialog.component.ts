import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatDialog } from '@angular/material';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';
import { Proposal } from 'src/app/interfaces/proposal';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.css']
})
export class DeleteConfirmationDialogComponent implements OnInit {

  title: string;
  message: string;

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel,
              private proposalDataService: ProposalsDataService,
              private comms: CommunicatorService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private router: Router,
              private logger: LoggerService) {
                this.title = data.title;
                this.message = data.message;
              }

  @Input() proposal: Proposal;

  ngOnInit() {
  }
  deleteOnConfirm(): void {
    this.dialogRef.close(true);
  }
  onDismiss(): void {
    this.dialogRef.close(false);
  }
}

export class ConfirmDialogModel {
  constructor(public title: string, public message: string) {
  }
}
