import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionCardComponent } from './auction-card.component';

import { MaterialModule } from '../../material/material.module';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('AuctionCardComponent', () => {
  let component: AuctionCardComponent;
  let fixture: ComponentFixture<AuctionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionCardComponent ],
      imports: [  MaterialModule, BrowserAnimationsModule, NoopAnimationsModule],
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
