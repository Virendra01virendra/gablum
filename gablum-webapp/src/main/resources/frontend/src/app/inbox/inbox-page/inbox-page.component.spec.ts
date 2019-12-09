import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxPageComponent } from './inbox-page.component';
import { MaterialModule } from 'src/app/material/material.module';

describe('InboxPageComponent', () => {
  let component: InboxPageComponent;
  let fixture: ComponentFixture<InboxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ InboxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
