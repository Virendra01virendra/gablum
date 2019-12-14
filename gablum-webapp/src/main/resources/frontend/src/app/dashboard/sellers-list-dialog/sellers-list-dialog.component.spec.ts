import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersListDialogComponent } from './sellers-list-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SellersListDialogComponent', () => {
  let component: SellersListDialogComponent;
  let fixture: ComponentFixture<SellersListDialogComponent>;
  const data = {

    businessDomain: 'Agriculture',
    businessSubDomain: 'Raw material',
    productName: '343',
    quantity: '44',
    creditPeriod: '111',
    creditPeriodWeight: '',
    deliveryDate: new Date('Date Fri Nov 29 2019 00:00:00 GMT+0530 (India Standard Time)'),
    deliveryDateWeight: '',
    methodOfSupply: '1',
    methodOfSupplyWeight: '1',
    price: '323',
    priceWeight: '',
    qualityCertification: '1',
    qualityCertificationWeight: '',
    auctionEndDate: new Date('Date Mon Nov 11 2019 00:00:00 GMT+0530 (India Standard Time)'),
    auctionStartDate: new Date('Date Wed Nov 13 2019 00:00:00 GMT+0530 (India Standard Time)'),
    regEndDate: new Date('Date Fri Nov 29 2019 00:00:00 GMT+0530 (India Standard Time)'),
    regStartDate: new Date('Date Thu Nov 28 2019 00:00:00 GMT+0530 (India Standard Time)')
};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersListDialogComponent ],
      imports: [ MaterialModule, HttpClientModule, RouterTestingModule],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: data
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
