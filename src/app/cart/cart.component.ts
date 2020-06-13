import { Component, OnInit } from '@angular/core';
import { StoreKeys } from '../shared/constants/store-keys.constants';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalPrice: number = 0;
  priceMapping: any = {};
  productQuantityCount: any = {};
  productListData: Array<any> = [];
  constructor(private _storeService: StoreService) { }

  ngOnInit() {
    this._storeService.getFromStore(StoreKeys.products_in_cart).subscribe(data => {
      this.productListData = data;
      if (this.productListData.length)
        this.calculateIntialPrice(this.productListData);
      this.getProductQuantity(this.productListData);
    });
  }

  calculateFinalPrice($event) {
    for (let key in $event) {
      this.priceMapping[key] = $event[key];
    }
    this.sumTotalCartValue(this.priceMapping);
  }

  deletedItemFromCart($event) {
    delete this.priceMapping[$event];
    this.sumTotalCartValue(this.priceMapping);
  }

  sumTotalCartValue(priceMap: object) {
    let _sum = Object.values(priceMap);
    this.totalPrice = _sum.reduce((a, b) => a + b);
  }

  calculateIntialPrice(productList: Array<any>) {
    for (let i = 0; i < productList.length; i++) {
      this.priceMapping[productList[i].id] = Number(productList[i].price);
    }
    this.sumTotalCartValue(this.priceMapping);
  }

  getProductQuantity(productList: Array<any>) {
    this.productQuantityCount = {};
    for (let i = 0; i < productList.length; i++) {
      if (!this.productQuantityCount.hasOwnProperty(productList[i].id)) {
        this.productQuantityCount[productList[i].id] = 1;
      }
      else {
        this.productQuantityCount[productList[i].id]++;
      }
    }
  }

}
