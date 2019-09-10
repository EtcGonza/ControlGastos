import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsSlidesComponent } from './icons-slides.component';

describe('IconsSlidesComponent', () => {
  let component: IconsSlidesComponent;
  let fixture: ComponentFixture<IconsSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsSlidesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
