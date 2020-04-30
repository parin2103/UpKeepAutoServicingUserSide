import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  url : string = environment.url+'product/';
  constructor(private _http:HttpClient) { }

  getAllProduct()
  {
    return this._http.get(this.url);
  }
  getAllImg()
  {
    return this._http.get(environment.url + 'Product_image/');
  }
}
