import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionStartDialogComponent } from './auction-start-dialog.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuctionStartDialogComponent', () => {
  let component: AuctionStartDialogComponent;
  let fixture: ComponentFixture<AuctionStartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionStartDialogComponent ],
      imports: [
        MaterialModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionStartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call network', () => {
    expect(component.startAuction(null)).toThrowError(TypeError);
  });
});
