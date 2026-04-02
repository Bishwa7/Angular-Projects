import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChildTwo } from './lazy-child-two';

describe('LazyChildTwo', () => {
  let component: LazyChildTwo;
  let fixture: ComponentFixture<LazyChildTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyChildTwo],
    }).compileComponents();

    fixture = TestBed.createComponent(LazyChildTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
