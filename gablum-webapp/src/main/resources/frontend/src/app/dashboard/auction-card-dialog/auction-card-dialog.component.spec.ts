import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionCardDialogComponent } from './auction-card-dialog.component';

describe('AuctionCardDialogComponent', () => {
  let component: AuctionCardDialogComponent;
  let fixture: ComponentFixture<AuctionCardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionCardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
