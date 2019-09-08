import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionDeudasComponent } from './presentacion-deudas.component';

describe('PresentacionDeudasComponent', () => {
  let component: PresentacionDeudasComponent;
  let fixture: ComponentFixture<PresentacionDeudasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentacionDeudasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionDeudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
