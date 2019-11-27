import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { AuctionsListComponent } from '../auctions-list/auctions-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BidCardComponent } from '../bid-card/bid-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ProposalsListComponent } from '../proposals-list/proposals-list.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MaterialModule
      ],
      declarations: [
        DashboardComponent,
        AuctionsListComponent,
        BidCardComponent,
        ProposalsListComponent
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
