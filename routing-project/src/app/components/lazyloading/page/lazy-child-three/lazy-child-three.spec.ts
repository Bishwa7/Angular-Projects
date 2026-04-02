import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChildThree } from './lazy-child-three';

describe('LazyChildThree', () => {
  let component: LazyChildThree;
  let fixture: ComponentFixture<LazyChildThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyChildThree],
    }).compileComponents();

    fixture = TestBed.createComponent(LazyChildThree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
