import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProposalForm2Component } from './new-proposal-form2.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule, MatDatepickerModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('NewProposalForm2Component', () => {
  let component: NewProposalForm2Component;
  let fixture: ComponentFixture<NewProposalForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProposalForm2Component ],
      imports: [ BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
        ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProposalForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
