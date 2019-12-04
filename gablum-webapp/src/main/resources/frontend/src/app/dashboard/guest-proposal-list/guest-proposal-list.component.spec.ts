import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestProposalListComponent } from './guest-proposal-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule , MatButtonModule} from '@angular/material';


describe('GuestProposalListComponent', () => {
  let component: GuestProposalListComponent;
  let fixture: ComponentFixture<GuestProposalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatTableModule,
        MatButtonModule
      ],
      declarations: [ GuestProposalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestProposalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
