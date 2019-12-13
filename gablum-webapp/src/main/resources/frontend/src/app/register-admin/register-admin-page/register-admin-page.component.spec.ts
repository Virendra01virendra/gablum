import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdminPageComponent } from './register-admin-page.component';

describe('RegisterAdminPageComponent', () => {
  let component: RegisterAdminPageComponent;
  let fixture: ComponentFixture<RegisterAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
