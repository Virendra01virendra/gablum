import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditProfileDialogComponent} from '../edit-profile-dialog/edit-profile-dialog.component'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  onClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.closeOnNavigation = true;
    this.dialog.open(EditProfileDialogComponent, dialogConfig);
  }
}
