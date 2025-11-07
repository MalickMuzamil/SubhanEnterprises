import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCta } from './product-cta';

describe('ProductCta', () => {
  let component: ProductCta;
  let fixture: ComponentFixture<ProductCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
