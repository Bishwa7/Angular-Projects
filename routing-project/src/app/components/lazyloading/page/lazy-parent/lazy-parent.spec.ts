import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyParent } from './lazy-parent';

describe('LazyParent', () => {
  let component: LazyParent;
  let fixture: ComponentFixture<LazyParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyParent],
    }).compileComponents();

    fixture = TestBed.createComponent(LazyParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
