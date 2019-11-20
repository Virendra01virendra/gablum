import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProposalForm3Component } from './new-proposal-form3.component';

describe('NewProposalForm3Component', () => {
  let component: NewProposalForm3Component;
  let fixture: ComponentFixture<NewProposalForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProposalForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProposalForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
