import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChildOne } from './lazy-child-one';

describe('LazyChildOne', () => {
  let component: LazyChildOne;
  let fixture: ComponentFixture<LazyChildOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyChildOne],
    }).compileComponents();

    fixture = TestBed.createComponent(LazyChildOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
