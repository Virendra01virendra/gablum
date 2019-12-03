import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProposalCardComponent } from './new-proposal-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TimerComponent } from 'src/app/scheduler/timer/timer.component';

describe('NewProposalCardComponent', () => {
  let component: NewProposalCardComponent;
  let fixture: ComponentFixture<NewProposalCardComponent>;

  beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [NewProposalCardComponent, TimerComponent],
    imports: [MaterialModule, HttpClientModule],
    // providers: [{ provide: DashboardComponent,
    //    useValue: proposal}]
  })
    .compileComponents();
}));

  beforeEach(() => {
  fixture = TestBed.createComponent(NewProposalCardComponent);
  component = fixture.componentInstance;
  const proposal = { proposalId: '',
    productId: '',
    createdBy: '',
    updatedBy: '',
    createdOn: new Date('Date Fri Nov 29 2019 00:00:00 GMT+0530 (India Standard Time)') ,
    updatedOn: new Date('Date Fri Nov 29 2019 00:00:00 GMT+0530 (India Standard Time)'),
    thresholdParticipants: 5,
    views: 5,
    interested: 5,
    businessDomain: 'Agriculture',
  BusinessSubDomain: 'Raw material',
  qualityCertificate: true,
  productName: '343',
  quantity: 2,
  creditPeriod: 67,
  creditPeriodWeight: '',
  deliveryDate: new Date('Date Fri Nov 29 2019 00:00:00 GMT+0530 (India Standard Time)'),
  deliveryDateWeight: '',
  methodOfSupply: true,
  methodOfSupplyWeight: '1',
  price: 67,
  priceWeight: '',
  qualityCertification: '',
  qualityCertificationWeight: '',
  auctionEndDate: new Date('Date Mon Nov 11 2019 00:00:00 GMT+0530 (India Standard Time)'),
  auctionStartDate: new Date('Date Wed Nov 13 2019 00:00:00 GMT+0530 (India Standard Time)'),
  regEndDate: new Date('Date Fri Nov 29 2019 00:00:00 GMT+0530 (India Standard Time)'),
  regStartDate: new Date('Date Thu Nov 28 2019 00:00:00 GMT+0530 (India Standard Time)') };

// simulate the parent setting the input property with that hero
  component.proposal = proposal;
  fixture.detectChanges();
});

  it('should create', () => {
  expect(component).toBeTruthy();
});
});
