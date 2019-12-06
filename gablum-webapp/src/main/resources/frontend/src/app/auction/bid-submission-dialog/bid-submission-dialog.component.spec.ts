import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidSubmissionDialogComponent } from './bid-submission-dialog.component';

describe('BidSubmissionDialogComponent', () => {
  let component: BidSubmissionDialogComponent;
  let fixture: ComponentFixture<BidSubmissionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidSubmissionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidSubmissionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
