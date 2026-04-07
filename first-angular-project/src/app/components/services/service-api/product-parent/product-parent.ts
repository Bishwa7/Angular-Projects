import { Component } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-product-parent',
  imports: [RouterOutlet],
  templateUrl: './product-parent.html',
  styleUrl: './product-parent.css',
})
export class ProductParent {

  constructor(private router: Router){}


  goToProductList() {
    this.router.navigate(['product-list'])
  }

  goToDemoList() {
    this.router.navigate([''])
  }
}
