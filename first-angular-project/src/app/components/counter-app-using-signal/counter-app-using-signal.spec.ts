import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAppUsingSignal } from './counter-app-using-signal';

describe('CounterAppUsingSignal', () => {
  let component: CounterAppUsingSignal;
  let fixture: ComponentFixture<CounterAppUsingSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterAppUsingSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterAppUsingSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
