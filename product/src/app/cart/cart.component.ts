import { Component, OnInit } from '@angular/core';
import {CartService} from "./shared/cart.service";
import {Product} from "../products/shared/product.model";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  products: Subject<Product[]>;
  constructor(private cartService: CartService) {
    this.products = cartService.getProducts();
  }

  delete(product: Product): void {
    this.cartService.delete(product);
  }

}
