import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../ServiceApi/product-service';
import { Product } from '../ServiceApi/productDataType';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  productData = signal<Product | undefined>(undefined)

  constructor(private route: ActivatedRoute, private products: ProductService){}


  ngOnInit() {
    let productId = this.route.snapshot.paramMap.get('id')

    this.products.getProducts().subscribe((data) =>{
      data.products.filter((item) => {
        if(item.id == Number(productId)) {
          console.log(item)

          this.productData.set(item)
        }
      })
    })

  }
}
