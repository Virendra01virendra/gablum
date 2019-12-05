import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendProposalDialogComponent } from './extend-proposal-dialog.component';

describe('ExtendProposalDialogComponent', () => {
  let component: ExtendProposalDialogComponent;
  let fixture: ComponentFixture<ExtendProposalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendProposalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendProposalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
