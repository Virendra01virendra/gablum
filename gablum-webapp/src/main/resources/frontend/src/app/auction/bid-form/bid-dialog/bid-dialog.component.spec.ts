import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidDialogComponent } from './bid-dialog.component';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

describe('BidDialogComponent', () => {
  let component: BidDialogComponent;
  let fixture: ComponentFixture<BidDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidDialogComponent ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }]
        })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
