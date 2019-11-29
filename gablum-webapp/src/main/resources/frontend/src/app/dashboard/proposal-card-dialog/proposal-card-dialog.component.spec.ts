import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalCardDialogComponent } from './proposal-card-dialog.component';

describe('ProposalCardDialogComponent', () => {
  let component: ProposalCardDialogComponent;
  let fixture: ComponentFixture<ProposalCardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalCardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
