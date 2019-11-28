import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public heroText = 'A B2B Auctioning platform, where quality meets you';

  constructor() { }

  ngOnInit() {
  }

}
