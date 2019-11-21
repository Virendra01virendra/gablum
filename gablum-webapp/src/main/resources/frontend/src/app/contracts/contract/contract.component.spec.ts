import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatListModule } from '@angular/material';
import { ContractComponent } from './contract.component';
import { MatListModule, MatButtonModule, MatCardModule } from '@angular/material';

describe('ContractComponent', () => {
  let component: ContractComponent;
  let fixture: ComponentFixture<ContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractComponent],
      imports: [MatListModule, MatButtonModule, MatCardModule]
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
