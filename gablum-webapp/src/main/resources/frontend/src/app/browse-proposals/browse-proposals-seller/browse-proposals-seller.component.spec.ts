import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseProposalsSellerComponent } from './browse-proposals-seller.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('BrowseProposalsSellerComponent', () => {
  let component: BrowseProposalsSellerComponent;
  let fixture: ComponentFixture<BrowseProposalsSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseProposalsSellerComponent ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseProposalsSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
