import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductService} from "../shared/product.service";
import {Product} from "../shared/product.model";
import {User} from "../../shared/user.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  @Input() currentUser: User;
  @Output() deleteProductEvent = new EventEmitter();
  @Output() addToCartEvent = new EventEmitter();

  constructor() {

  }

  delete(product: Product): void {
    this.deleteProductEvent.emit(product);
  }

  addToCart(product: Product): void {
    this.addToCartEvent.emit(product);
  }
}
