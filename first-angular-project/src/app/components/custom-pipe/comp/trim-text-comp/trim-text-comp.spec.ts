import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimTextComp } from './trim-text-comp';

describe('TrimTextComp', () => {
  let component: TrimTextComp;
  let fixture: ComponentFixture<TrimTextComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrimTextComp],
    }).compileComponents();

    fixture = TestBed.createComponent(TrimTextComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
