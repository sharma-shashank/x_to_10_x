import { Injectable } from '@angular/core';
import { APIRoutes } from '../shared/constants/api-url.constants';;
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private _http: HttpClient) { }

  getProductList() {
    return this._http.get(APIRoutes.product_list);
  }
}
