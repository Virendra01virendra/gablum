import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProposalsDataService } from 'src/app/services/proposals-data.service';
import { CommunicatorService } from 'src/app/services/communicator.service';
import { Profile } from 'src/app/interfaces/profile';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoggerService } from 'src/app/services/logger.service';
import { Proposal } from 'src/app/interfaces/proposal';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface InvitedUsersEmail {
  position: number;
  email: string;
}
@Component({
  selector: 'app-sellers-list-dialog',
  templateUrl: './sellers-list-dialog.component.html',
  styleUrls: ['./sellers-list-dialog.component.css']
})
export class SellersListDialogComponent implements OnInit {

  public static messageKey = 'sellers-list-dialog-component';
  disabled = false;
  buttonClicked = false;
  public isLoggedIn = false;
  public isBuyer = false;
  public isSeller = false;
  public profile: Profile;
  alreadyRegistered: boolean;
  public userEmail = '';
  displayedColumns: string[] = ['select', 'position', 'sellerEmail'];
  public ELEMENT_DATA;
  dataSource = new MatTableDataSource<InvitedUsersEmail>(this.ELEMENT_DATA);
  selection = new SelectionModel<InvitedUsersEmail>(true, []);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Proposal, private proposalService: ProposalsDataService,
              private comms: CommunicatorService, private auth: AuthenticationService, private logger: LoggerService) {
    this.ELEMENT_DATA = this.data.invitedUsersEmail.map((invitedUsersEmail, i) => {
      return {
        email: invitedUsersEmail,
        position: i + 1
      };
    });
    console.log('this.Element_Data ::', JSON.stringify(this.ELEMENT_DATA));
    comms.getMessages().subscribe(msg => {
      if (msg.dest === SellersListDialogComponent.messageKey || msg.dest === '@all') {
        const Data = msg.data;

        if ('authChanged' in Data) {
          this.isLoggedIn = auth.getAuthenticated();
          this.profile = auth.getProfileData();
          this.isBuyer = auth.isBuyer();
          this.isSeller = auth.isSeller();
          this.userEmail = this.profile.email;
        }

        if ('invite-seller' in Data) {
          this.buttonClicked = true;
        }
      }
    });
  }

  ngOnInit() {
    this.logger.log('aaaaaaaa' + JSON.stringify(this.dataSource));
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: InvitedUsersEmail): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }



  onInvite(ele) {
    console.log('Invite data', ele);
    this.disabled = true;
    this.proposalService.postInvitedSeller(SellersListDialogComponent.messageKey, this.data, 'invite-seller');
  }
}
