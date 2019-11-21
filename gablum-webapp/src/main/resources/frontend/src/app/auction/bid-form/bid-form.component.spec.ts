import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidFormComponent } from './bid-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';



describe('BidFormComponent', () => {
  let component: BidFormComponent;
  let fixture: ComponentFixture<BidFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidFormComponent ],
      imports: [ ReactiveFormsModule, MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
