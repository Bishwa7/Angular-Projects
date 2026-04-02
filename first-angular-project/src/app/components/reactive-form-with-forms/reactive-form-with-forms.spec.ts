import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithForms } from './reactive-form-with-forms';

describe('ReactiveFormWithForms', () => {
  let component: ReactiveFormWithForms;
  let fixture: ComponentFixture<ReactiveFormWithForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormWithForms],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormWithForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
