import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XbarSComponent } from './xbar-s.component';

describe('XbarSComponent', () => {
  let component: XbarSComponent;
  let fixture: ComponentFixture<XbarSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XbarSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XbarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
