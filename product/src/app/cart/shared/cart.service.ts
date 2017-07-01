import {Injectable} from '@angular/core';
import {Product} from "../../products/shared/product.model";
import {ProductService} from "../../products/shared/product.service";
import {UserService} from "../../shared/user.service";
import {Subject} from "rxjs/Subject";
import {User} from "../../shared/user.model";
import {ProductList} from "../../products/shared/product-list.model";

@Injectable()
export class CartService {

  private products = new ProductList();
  private productsStream = new Subject<Product[]>();
  private currentUser: User;

  constructor(private productService: ProductService,
              private userService: UserService) {
    this.userService.getCurrentUser().subscribe(user => this.currentUser = user);
  }

  getProducts(): Subject<Product[]> {
    return this.productsStream;
  }

  addProduct(product: Product): void {
    if (!this.currentUser || this.currentUser.isAdmin) {
      return;
    }
    this.productService.buy(product);
    this.products.addProduct(product);
    this.broadcast();

  }

  delete(product: Product): void {
    this.products.reduceProduct(product);
    this.broadcast();
    this.productService.add(product);
  }

  private broadcast(): void {
    this.productsStream.next(this.products.getProduct());
  }
}
