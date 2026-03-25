import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGetUsingSignal } from './set-get-using-signal';

describe('SetGetUsingSignal', () => {
  let component: SetGetUsingSignal;
  let fixture: ComponentFixture<SetGetUsingSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetGetUsingSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(SetGetUsingSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
