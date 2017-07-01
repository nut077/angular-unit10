import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../products/shared/product.model";

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss']
})
export class CartProductListComponent {

  @Input() products: Product[] = [];
  @Output() deleteProductEvent = new EventEmitter();
  constructor() {

  }

  delete(product: Product): void {
    this.deleteProductEvent.emit(product);
  }

}
