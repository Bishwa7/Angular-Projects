import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLoadPage } from './dynamic-load-page';

describe('DynamicLoadPage', () => {
  let component: DynamicLoadPage;
  let fixture: ComponentFixture<DynamicLoadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicLoadPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicLoadPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
