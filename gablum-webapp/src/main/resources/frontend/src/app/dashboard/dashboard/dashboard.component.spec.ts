import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { AuctionsListComponent } from '../auctions-list/auctions-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BidCardComponent } from '../bid-card/bid-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NewProposalCardComponent } from 'src/app/dashboard/new-proposal-card/new-proposal-card.component';
import { TimerComponent } from '../../scheduler/timer/timer.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule
      ],
      declarations: [
        DashboardComponent,
        AuctionsListComponent,
        BidCardComponent,
        TimerComponent,
        NewProposalCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
