import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallHttpComponent } from './call-http.component';

describe('CallHttpComponent', () => {
  let component: CallHttpComponent;
  let fixture: ComponentFixture<CallHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
