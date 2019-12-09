import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidResponseDialogComponent } from './bid-response-dialog.component';

describe('BidResponseDialogComponent', () => {
  let component: BidResponseDialogComponent;
  let fixture: ComponentFixture<BidResponseDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidResponseDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidResponseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
