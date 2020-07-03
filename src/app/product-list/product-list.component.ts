import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productListData: any = {};
  fiteredProducts: Array<any> = [];
  productCategories: any = {};
  constructor(private _listService: ListService) { }

  ngOnInit() {
    this._listService.getProductList().subscribe((response: any) => {
      this.productListData = response;
    });
  }

  getCategories() {
    let productList = this.productListData.products;
    this.productCategories = {};
    for (let i = 0; i < productList.length; i++) {
      if (!this.productCategories.hasOwnProperty(productList[i].category)) {
        this.productCategories[productList[i].category] = [productList[i]];
      }
      else {
        this.productCategories[productList[i].category].push(productList[i]);
      }
    }
    return this.productCategories;
  }

  filteredCategory($event) {
    if ($event !== 'All') {
      this.fiteredProducts = this.productListData.products.filter(item => item.category === $event);
    }
    else {
      this.fiteredProducts.length = 0;
    }
  }


}
