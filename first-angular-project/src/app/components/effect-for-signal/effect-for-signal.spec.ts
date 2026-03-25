import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectForSignal } from './effect-for-signal';

describe('EffectForSignal', () => {
  let component: EffectForSignal;
  let fixture: ComponentFixture<EffectForSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EffectForSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(EffectForSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
