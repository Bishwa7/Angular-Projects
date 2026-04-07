import { Component, signal } from '@angular/core';
import { ProductService } from '../ServiceApi/product-service';
import { Product } from '../ServiceApi/productDataType';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  productData = signal<Product[]>([])

  constructor(private product: ProductService){}

  ngOnInit() {
    this.product.getProducts().subscribe((data) => {

      this.productData.set(data.products)
    })
  }
}
