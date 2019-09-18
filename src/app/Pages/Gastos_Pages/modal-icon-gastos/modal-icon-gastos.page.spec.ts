import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIconGastosPage } from './modal-icon-gastos.page';

describe('ModalIconGastosPage', () => {
  let component: ModalIconGastosPage;
  let fixture: ComponentFixture<ModalIconGastosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIconGastosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIconGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
