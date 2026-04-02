import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithInput } from './reactive-form-with-input';

describe('ReactiveFormWithInput', () => {
  let component: ReactiveFormWithInput;
  let fixture: ComponentFixture<ReactiveFormWithInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormWithInput],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormWithInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
