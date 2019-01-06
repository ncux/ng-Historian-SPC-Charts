import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IXMRComponent } from './ixmr.component';

describe('IXMRComponent', () => {
  let component: IXMRComponent;
  let fixture: ComponentFixture<IXMRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IXMRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IXMRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
