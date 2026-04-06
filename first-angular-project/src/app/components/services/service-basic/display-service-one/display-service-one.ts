import { Component, signal } from '@angular/core';
import { ServiceOne } from '../ServiceOne/service-one';


interface ProductType {
    id: Number,
    name: String,
    price: Number
}

@Component({
  selector: 'app-display-service-one',
  imports: [],
  templateUrl: './display-service-one.html',
  styleUrl: './display-service-one.css',
})
export class DisplayServiceOne {

  productDetails = signal<ProductType[]>([])
  productDetails2 = signal<ProductType[]>([])

  constructor(private product: ServiceOne){}

  ngOnInit() {
    let data = this.product.getProducts()
    console.log(data)

    this.productDetails.set(data)
  }

  handleProductDisplay() {
    let data = this.product.getProducts()
    console.log(data)

    this.productDetails2.set(data)
  }

}
