import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdminPageComponent } from './register-admin-page.component';
import { MaterialModule } from '../../../../../../../../target/classes/frontend/src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('RegisterAdminPageComponent', () => {
  let component: RegisterAdminPageComponent;
  let fixture: ComponentFixture<RegisterAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAdminPageComponent ],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule
      ]
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
