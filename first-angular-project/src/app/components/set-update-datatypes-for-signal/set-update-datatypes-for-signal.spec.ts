import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpdateDatatypesForSignal } from './set-update-datatypes-for-signal';

describe('SetUpdateDatatypesForSignal', () => {
  let component: SetUpdateDatatypesForSignal;
  let fixture: ComponentFixture<SetUpdateDatatypesForSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetUpdateDatatypesForSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(SetUpdateDatatypesForSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
