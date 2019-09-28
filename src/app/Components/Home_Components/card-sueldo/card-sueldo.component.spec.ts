import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSueldoComponent } from './card-sueldo.component';

describe('CardSueldoComponent', () => {
  let component: CardSueldoComponent;
  let fixture: ComponentFixture<CardSueldoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSueldoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSueldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
