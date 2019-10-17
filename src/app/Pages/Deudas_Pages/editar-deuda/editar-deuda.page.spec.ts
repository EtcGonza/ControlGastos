import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDeudaPage } from './editar-deuda.page';

describe('EditarDeudaPage', () => {
  let component: EditarDeudaPage;
  let fixture: ComponentFixture<EditarDeudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDeudaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDeudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
