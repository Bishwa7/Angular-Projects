import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCount } from './parent-count';

describe('ParentCount', () => {
  let component: ParentCount;
  let fixture: ComponentFixture<ParentCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCount],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentCount);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
