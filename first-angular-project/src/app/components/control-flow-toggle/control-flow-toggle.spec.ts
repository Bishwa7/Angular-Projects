import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowToggle } from './control-flow-toggle';

describe('ControlFlowToggle', () => {
  let component: ControlFlowToggle;
  let fixture: ComponentFixture<ControlFlowToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlFlowToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
