import {Injectable} from '@angular/core';
import {Product} from "./product.model";
import {UserService} from "../../shared/user.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {User} from "../../shared/user.model";
import {ProductList} from "./product-list.model";

@Injectable()
export class ProductService {

  private products = new ProductList([
    {name: 'Product#A', amount: 10},
    {name: 'Product#B', amount: 20},
    {name: 'Product#C', amount: 30},
    {name: 'Product#D', amount: 40},
    {name: 'Product#E', amount: 50}
  ]);

  private productsStream = new BehaviorSubject<Product[]>(this.products.getProduct());
  private currentUser: User;

  constructor(private userService: UserService) {
    this.userService.getCurrentUser().subscribe(user => this.currentUser = user);
    this.broadcast();
  }

  getProducts(): BehaviorSubject<Product[]> {
    return this.productsStream;
  }

  delete(product: Product): void {
    if (!this.currentUser || !this.currentUser.isAdmin) {
      return;
    }
    this.products.deleteProduct(product);
    this.broadcast();
  }

  buy(product: Product): void {
    this.products.reduceProduct(product);
    this.broadcast();
  }

  add(product: Product) {
    this.products.addProduct(product);
    this.broadcast();
  }

  private broadcast(): void {
    this.productsStream.next(this.products.getProduct());
  }

}
