import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XbarRComponent } from './xbar-r.component';

describe('XbarRComponent', () => {
  let component: XbarRComponent;
  let fixture: ComponentFixture<XbarRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XbarRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XbarRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
