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
      quantityValue: '',
      quantityUnit: '',
      price: '',
      priceWeight: '',
      deliveryDate: '',
      deliveryDateWeight: '',
      creditPeriod: '',
      creditPeriodWeight: '',
      qualityCertification: '',
      qualityCertificationWeight: '',
      methodOfSupply: '',
      methodOfSupplyWeight: '',
      regStartDate: '',
      regEndDate: '',
      auctionStartDate: '',
      auctionEndDate: '',
      createdOn: '',
      updatedOn: '',
      thresholdParticipants: '',
      views: '',
      interested: '',
      interestedUsersEmail: [''],
    },
    isAuctionActive: '',
    participantsVerificationId: '',
    selectedParticipantList:[''],
    bidIdList: [''],
    createdOn: '',
    updatedOn: '',
    createdBy: '',
    updatedBy: '',
    auctionStartDate: '',
    auctionEndDate: '',
    };
    component.auction = auction;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
