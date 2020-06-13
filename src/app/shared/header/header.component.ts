import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { StoreKeys } from '../constants/store-keys.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItemCount: Number = 0;
  constructor(private _storeService: StoreService) { }

  ngOnInit() {
    this._storeService.getFromStore(StoreKeys.product_count_in_cart).subscribe(data => {
      this.totalItemCount = data;
    })
  }

}
