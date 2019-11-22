import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatListModule } from '@angular/material';
import { ContractComponent } from './contract.component';
import { MatListModule, MatButtonModule, MatCardModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContractComponent', () => {
  let component: ContractComponent;
  let fixture: ComponentFixture<ContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractComponent],
      imports: [MatListModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
