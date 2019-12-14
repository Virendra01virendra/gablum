import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBidSheetComponent } from './add-bid-sheet.component';

describe('AddBidSheetComponent', () => {
  let component: AddBidSheetComponent;
  let fixture: ComponentFixture<AddBidSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBidSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBidSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
