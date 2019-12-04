import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionCardComponent } from './auction-card.component';

import { MaterialModule } from '../../material/material.module';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ConsoleModule } from '../../console/console.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AuctionCardComponent', () => {
  let component: AuctionCardComponent;
  let fixture: ComponentFixture<AuctionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionCardComponent ],
      imports: [  MaterialModule, BrowserAnimationsModule, NoopAnimationsModule, ConsoleModule,
        HttpClientTestingModule],
      providers: [
        BrowserAnimationsModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionCardComponent);
    component = fixture.componentInstance;
    const auction = {
      auctionId: '',
      auctionName: '',
      proposal: {
        proposalId: '',
    productId: '',
    createdBy: '',
    updatedBy: '',
    businessDomain: '',
    businessSubDomain: '',
    productName: '',
    quantityValue: 1,
    quantityUnit: '',
    price: 1,
    priceWeight: 1,
    deliveryDate: new Date(),
    deliveryDateWeight: 1,
    creditPeriod: 1,
    creditPeriodWeight: 1,
    qualityCertification: true,
    qualityCertificationWeight: 1,
    methodOfSupply: true,
    methodOfSupplyWeight: 1,
    regStartDate: new Date(),
    regEndDate: new Date(),
    auctionStartDate: new Date(),
    auctionEndDate: new Date(),
    createdOn: new Date(),
    updatedOn: new Date(),
    thresholdParticipants: 1,
    views: 1,
    interested: 1,
      },
      isAuctionActive: true,
      participantsVerificationId: '',
      selectedParticipantList: [],
      bidIdList: [],
      createdOn: new Date(),
      updatedOn: new Date(),
      createdBy: '',
      updatedBy: '',
      auctionStartDate: new Date(),
      auctionEndDate: new Date()
    };
    component.auction = auction;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
