import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonLazyChildFour } from './non-lazy-child-four';

describe('NonLazyChildFour', () => {
  let component: NonLazyChildFour;
  let fixture: ComponentFixture<NonLazyChildFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonLazyChildFour],
    }).compileComponents();

    fixture = TestBed.createComponent(NonLazyChildFour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
