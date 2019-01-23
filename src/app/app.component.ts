import { Component } from '@angular/core';
import {ProductModel} from './Model/product.model';

@Component({
  selector: 'app-root',
  template: `<div class="inventory-app">
    <app-product-list [productList]="products" (onProductSelected)="productWasSelected($event)"></app-product-list>
  </div>`,
})
export class AppComponent {
  products: Array<ProductModel>;
  constructor() {
    this.products = [ new ProductModel('men', 'nemer', 'url', ['men'], 10) ,
                    new ProductModel('men', 'nemer', 'url', ['men'], 10)];
  }
  productWasSelected(product: ProductModel): void {
    console.log(product);
  }
}
