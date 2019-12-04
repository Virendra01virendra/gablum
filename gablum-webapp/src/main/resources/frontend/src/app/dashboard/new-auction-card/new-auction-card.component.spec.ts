import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuctionCardComponent } from './new-auction-card.component';

describe('NewAuctionCardComponent', () => {
  let component: NewAuctionCardComponent;
  let fixture: ComponentFixture<NewAuctionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAuctionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAuctionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
