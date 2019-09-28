import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGastadoComponent } from './card-gastado.component';

describe('CardGastadoComponent', () => {
  let component: CardGastadoComponent;
  let fixture: ComponentFixture<CardGastadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGastadoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGastadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
