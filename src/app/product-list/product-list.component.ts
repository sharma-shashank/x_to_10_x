import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productListData: Array<any> = [];

  constructor(private _listService: ListService) { }

  ngOnInit() {
    this._listService.getProductList().subscribe((response: any) => {
      this.productListData = response.data;
    });
  }
}
