import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../shared/product.model";
import {UserService} from "../../shared/user.service";
import {ProductService} from "../shared/product.service";
import {CartService} from "../../cart/shared/cart.service";
import {User} from "../../shared/user.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: {class: 'w-100'}
})
export class ProductComponent {

  @Input() product: Product;
  @Input() currentUser: User;
  @Output() deleteProductEvent = new EventEmitter();
  @Output() addToCartEvent = new EventEmitter();
  constructor() { }

  deleteProduct(): void {
    this.deleteProductEvent.emit(this.product);
  }

  addToCart(): void {
    this.addToCartEvent.emit(this.product);
  }

}
