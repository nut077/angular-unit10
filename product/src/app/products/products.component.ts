import { Component } from '@angular/core';
import {CartService} from "../cart/shared/cart.service";
import {ProductService} from "./shared/product.service";
import {UserService} from "../shared/user.service";
import {Product} from "./shared/product.model";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Subject<Product[]>;
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private userService: UserService
  ) {
    this.products = productService.getProducts();
  }

  delete(product: Product): void {
    this.productService.delete(product);
  }

  addToCart(product: Product): void {
    this.cartService.addProduct(product);
  }

}
