import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreKeys } from '../shared/constants/store-keys.constants';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  priceMap: any = {};
  totalQuantity: Number = 1;
  cartList: Array<any> = [];
  @Input() quantity: any = {};
  @Input() productList: Array<any> = [];
  @Output() totalPrice = new EventEmitter();
  @Output() deletedItem = new EventEmitter();
  @Input() isCartPageRnedered: boolean = false;

  constructor(private _storeService: StoreService) { }

  ngOnInit() {
  }

  addProductToCart(id) {
    let _selectedProduct = this.productList.filter(data => data.id === id);
    if (this.cartList.indexOf(id) === -1) {
      this.cartList.push(id);
      this._storeService.setToStore(StoreKeys.products_in_cart, _selectedProduct);
    }
    else {
      return null;
    }
  }

  onQuantityChange(id, price) {
    let _inputValue = Number((<HTMLInputElement>document.getElementById(id)).value);
    let _quantity = !isNaN(_inputValue) ? _inputValue : 0;
    let _total = price * _quantity;
    this.priceMap[id] = _total;
    this.totalPrice.emit(this.priceMap);
    (<HTMLInputElement>document.getElementById('total_' + id)).innerHTML = `Sub Total:- ${Math.round(_quantity)} * ${price}  =` + ' ' + _total.toFixed(2);
  }

  deleteProductFromCart(producData) {
    this._storeService.removeInStore(producData.id);
    this.deletedItem.emit(producData.id);
    delete this.priceMap[producData.id];
    this.totalPrice.emit(this.priceMap);
  }

}
