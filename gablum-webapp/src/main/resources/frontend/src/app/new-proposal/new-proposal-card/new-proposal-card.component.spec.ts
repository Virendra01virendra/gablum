import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProposalCardComponent } from './new-proposal-card.component';

describe('NewProposalCardComponent', () => {
  let component: NewProposalCardComponent;
  let fixture: ComponentFixture<NewProposalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProposalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProposalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
