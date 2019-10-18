import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGastoPage } from './editar-gasto.page';

describe('EditarGastoPage', () => {
  let component: EditarGastoPage;
  let fixture: ComponentFixture<EditarGastoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarGastoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarGastoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
