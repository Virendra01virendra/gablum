import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersListDialogComponent } from './sellers-list-dialog.component';

describe('SellersListDialogComponent', () => {
  let component: SellersListDialogComponent;
  let fixture: ComponentFixture<SellersListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
