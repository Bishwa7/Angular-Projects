import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayServiceOne } from './display-service-one';

describe('DisplayServiceOne', () => {
  let component: DisplayServiceOne;
  let fixture: ComponentFixture<DisplayServiceOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayServiceOne],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayServiceOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
