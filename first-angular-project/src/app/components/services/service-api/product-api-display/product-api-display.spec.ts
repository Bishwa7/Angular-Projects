import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductApiDisplay } from './product-api-display';

describe('ProductApiDisplay', () => {
  let component: ProductApiDisplay;
  let fixture: ComponentFixture<ProductApiDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductApiDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductApiDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
