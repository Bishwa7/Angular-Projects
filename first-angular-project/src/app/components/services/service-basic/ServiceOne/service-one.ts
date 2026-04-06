import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceOne {

  contructor(){
    console.log("Service Called")
  }


  getProducts() {
    return [
      {id:1, name:"Watch", price:5000},
      {id:2, name:"Laptop", price: 80000},
      {id:3, name:"Mobile", price:20000},
      {id:4, name:"Headphones", price:5000}
    ]
  }
}
