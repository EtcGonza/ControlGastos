import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMiBilleteraPage } from './modal-mi-billetera.page';

describe('ModalMiBilleteraPage', () => {
  let component: ModalMiBilleteraPage;
  let fixture: ComponentFixture<ModalMiBilleteraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMiBilleteraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMiBilleteraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
