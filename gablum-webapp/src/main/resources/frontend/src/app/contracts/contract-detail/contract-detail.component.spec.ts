import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDetailComponent } from './contract-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

describe('ContractDetailComponent', () => {
  let component: ContractDetailComponent;
  let fixture: ComponentFixture<ContractDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContractDetailComponent],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDetailComponent);
    component = fixture.componentInstance;


    const contractDetail = {
      _id: '',
      contractId: '',
      auctionId: '',
      bidId: '',
      auctionDetails: {
        auctionId: '',
        uniqueLink: '',
        auctionName: '',
        proposal: {
          proposalId: '',
          productId: '',
          createdBy: '',
          updatedBy: '',
          businessDomain: '',
          businessSubDomain: '',
          productName: '',
          quantityValue: 2,
          quantityUnit: '',
          price: 1,
          priceWeight: 1,
          deliveryDate: new Date(),
          deliveryDateWeight: 1,
          creditPeriod: 2,
          creditPeriodWeight: 1,
          qualityCertification: true,
          qualityCertificationWeight: 2,
          methodOfSupply: true,
          methodOfSupplyWeight: 1,
          regStartDate: new Date(),
          regEndDate: new Date(),
          auctionStartDate: new Date(),
          auctionEndDate: new Date(),
          createdOn: new Date(),
          updatedOn: new Date(),
          thresholdParticipants: 3,
          views: 2,
          interested: 1,
          interestedUsersEmail: [],
          invitedUsersEmail: [],
          productDescription: ''
      },
      bidDetails: {
        bidId: '',
    auctionId: '',
    bid: {
        price: 20,
        creditPeriod: 2,
        qaqcCertificate: true,
        typeOfSupply: true,
        timeOfDelivery: new Date()
        },
    scoreObject: {
        total: 3,
        deliveryScore: 3,
        priceScore: 2,
        creditScore: 2,
        qaqcScore: 2,
        typeScore: 2
    },
    createdBy: ''
      },
      buyerEmail: '',
      buyerESign: '',
      sellerESign: '',
      sellerEmail: '',
      contractStatus: '',
      currentHash: '',
      previousHash: '',
      createdOn: new Date()
    }
  };

    component.contractDetail = contractDetail;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
