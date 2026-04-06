import { Component, signal } from '@angular/core';
import { ProductService } from '../ServiceApi/product-service';
import { Product } from '../ServiceApi/productDataType';

@Component({
  selector: 'app-product-api-display',
  imports: [],
  templateUrl: './product-api-display.html',
  styleUrl: './product-api-display.css',
})
export class ProductApiDisplay {

  productData = signal<Product[]>([])

  constructor(private product : ProductService) {}

  ngOnInit() {
    this.product.getProducts().subscribe((data) => {
      console.log(data)

      this.productData.set(data.products)
    })
  }
}
