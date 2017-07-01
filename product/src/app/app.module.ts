import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ConfigService } from "./shared/config.service";
import {UserService} from "./shared/user.service";
import { AuthFormComponent } from './shared/auth-form/auth-form.component';
import {ProductService} from "./products/shared/product.service";
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import {CartService} from "./cart/shared/cart.service";
import { CartComponent } from './cart/cart.component';
import { CartProductComponent } from './cart/cart-product/cart-product.component';
import { CartProductListComponent } from './cart/cart-product-list/cart-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthFormComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    CartComponent,
    CartProductComponent,
    CartProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: 'APP_CONFIG', useValue: ConfigService},
    UserService,
    ProductService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
