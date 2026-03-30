import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAngular } from './directives-angular';

describe('DirectivesAngular', () => {
  let component: DirectivesAngular;
  let fixture: ComponentFixture<DirectivesAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesAngular],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesAngular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
