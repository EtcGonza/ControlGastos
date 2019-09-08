import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeudaComponent } from './card-deuda.component';

describe('CardDeudaComponent', () => {
  let component: CardDeudaComponent;
  let fixture: ComponentFixture<CardDeudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDeudaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDeudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
