import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDetailComponent } from './contract-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

describe('ContractDetailComponent', () => {
  let component: ContractDetailComponent;
  let fixture: ComponentFixture<ContractDetailComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractDetailComponent ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientTestingModule,
        RouterTestingModule],
      providers: [Router,
        {
          provide: MAT_DIALOG_DATA
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
