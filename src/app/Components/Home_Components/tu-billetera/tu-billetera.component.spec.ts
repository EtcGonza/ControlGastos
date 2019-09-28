import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuBilleteraComponent } from './tu-billetera.component';

describe('TuBilleteraComponent', () => {
  let component: TuBilleteraComponent;
  let fixture: ComponentFixture<TuBilleteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuBilleteraComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuBilleteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
