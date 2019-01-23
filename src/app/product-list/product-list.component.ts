import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from '../Model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
  @Input() productList: ProductModel[];
  @Output() private _onProductSelected: EventEmitter<ProductModel>;
  constructor() {
    this._onProductSelected = new EventEmitter();
  }
  clicked(product: ProductModel): void  {
    this._onProductSelected.emit(product);
  }
}
