import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../products/shared/product.model";

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
  host: {class: 'w-100'}
})
export class CartProductComponent {

  @Input() product: Product;
  @Output() deleteProductEvent = new EventEmitter();
  constructor() { }

  delete(): void {
    this.deleteProductEvent.emit(this.product);
  }

}
