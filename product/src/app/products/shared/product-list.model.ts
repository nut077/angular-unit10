import {Product} from "./product.model";
export class ProductList {
  constructor(private products: Product[] = []) {
  }

  addProduct(product: Product): void {
    const index = this.products.findIndex(item => item.name === product.name);
    if (index >= 0) {
      this.products = this.products.map(
        item => item.name === product.name
          ? new Product(item.name, item.amount + 1)
          : item
      )
    } else {
      this.products = [...this.products, new Product(product.name, 1)]
    }
  }

  reduceProduct(product: Product): void {
    this.products = this.products.map(
      item => item.name === product.name
        ? new Product(item.name, item.amount - 1)
        : item
    ).filter(product => product.amount > 0);
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(item => item.name !== product.name);
  }

  getProduct() {
    return this.products;
  }
}
