import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProposalCardComponent } from './new-proposal-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';

describe('NewProposalCardComponent', () => {
  let component: NewProposalCardComponent;
  let fixture: ComponentFixture<NewProposalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProposalCardComponent ],
      imports: [MaterialModule, HttpClientModule]
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
