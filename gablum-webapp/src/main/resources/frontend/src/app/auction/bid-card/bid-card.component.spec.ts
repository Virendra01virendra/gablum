import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidCardComponent } from './bid-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BidCardComponent', () => {
  let component: BidCardComponent;
  let fixture: ComponentFixture<BidCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidCardComponent ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidCardComponent);
    component = fixture.componentInstance;
    const bidDataEntity = {
      bidId: '',
      auctionId: '',
      createdBy: '',
      bid: {
        price: 0,
        creditPeriod: 0,
        qaqcCertificate: true,
        typeOfSupply: true,
        timeOfDelivery: new Date()
      },
      score: 0
    };
    component.bidDataEntity = bidDataEntity;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
