import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalSellerDialogComponent } from './proposal-seller-dialog.component';

describe('ProposalSellerDialogComponent', () => {
  let component: ProposalSellerDialogComponent;
  let fixture: ComponentFixture<ProposalSellerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalSellerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalSellerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
