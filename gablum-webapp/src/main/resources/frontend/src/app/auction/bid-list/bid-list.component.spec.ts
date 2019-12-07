import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidListComponent } from './bid-list.component';
import { BidCardComponent } from '../bid-card/bid-card.component';

describe('BidListComponent', () => {
  let component: BidListComponent;
  let fixture: ComponentFixture<BidListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidListComponent,
      BidCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
