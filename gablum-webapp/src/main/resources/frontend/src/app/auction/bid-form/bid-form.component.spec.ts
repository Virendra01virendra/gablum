import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BidFormComponent } from './bid-form.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material/material.module';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AuctionCardComponent } from '../auction-card/auction-card.component';
import { ButtonComponent } from '../../console/button/button.component';
import { WindowComponent } from '../../console/window/window.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuctionsDataService } from 'src/app/services/auctions-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('BidFormComponent', () => {
  let component: BidFormComponent;
  let fixture: ComponentFixture<BidFormComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidFormComponent, AuctionCardComponent, ButtonComponent, WindowComponent ],
      imports: [ReactiveFormsModule, MaterialModule, HttpClientModule, BrowserAnimationsModule, NoopAnimationsModule,
         RouterTestingModule, HttpClientTestingModule],
      providers: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        AuctionsDataService,
      // {
      //   provide: ActivatedRoute,
      //   useValue: {
      //     // params: of({id: 'f2d7bc7a-a435-45df-a860-67209af6a03a'})
      //   }
      // },
      // { provide: Router,
      //   useValue: {
      //     // params: of({id: 'f2d7bc7a-a435-45df-a860-67209af6a03a'})
      //   }
      // },
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BidFormComponent);
    component = fixture.componentInstance;
    const auction = {
      auctionId: 'f2d7bc7a-a435-45df-a860-67209af6a03a',
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
  xit('should create', (router) => {
    expect(component).toBeTruthy();
  });
});
