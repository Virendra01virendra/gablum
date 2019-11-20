import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarModule } from './common/navbar/navbar.module';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatButtonModule, MatRadioModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NavbarModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatRadioModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent,
        LandingPageComponent,
        LoginComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
