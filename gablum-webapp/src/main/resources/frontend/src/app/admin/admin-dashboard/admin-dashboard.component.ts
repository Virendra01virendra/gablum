import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public contents = ['BUYERS STATS', 'SELLERS STATS', 'DATA ANALYTICS', 'LIVE PERFORMANCE'];
  public opened = true;
  constructor() { }

  ngOnInit() {
  }

}
