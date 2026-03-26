import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetterSetterForSignal } from './getter-setter-for-signal';

describe('GetterSetterForSignal', () => {
  let component: GetterSetterForSignal;
  let fixture: ComponentFixture<GetterSetterForSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetterSetterForSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(GetterSetterForSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
