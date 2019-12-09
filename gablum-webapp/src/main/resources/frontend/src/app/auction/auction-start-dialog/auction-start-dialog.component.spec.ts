import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionStartDialogComponent } from './auction-start-dialog.component';

describe('AuctionStartDialogComponent', () => {
  let component: AuctionStartDialogComponent;
  let fixture: ComponentFixture<AuctionStartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionStartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionStartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
