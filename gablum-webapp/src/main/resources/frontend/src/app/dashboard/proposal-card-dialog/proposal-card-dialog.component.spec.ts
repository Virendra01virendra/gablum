import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProposalCardDialogComponent } from './proposal-card-dialog.component';
import { MaterialModule } from '../../material/material.module';
import { Component, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProposalCardDialogComponent', () => {
  let component: ProposalCardDialogComponent;
  let fixture: ComponentFixture<ProposalCardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalCardDialogComponent ],
      imports: [MaterialModule, BrowserAnimationsModule],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {},
      }]
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
