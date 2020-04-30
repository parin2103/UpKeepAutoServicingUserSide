import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  url : string = environment.url + 'cart';
  constructor(public _http : HttpClient) { }

  getAllCart()
  {
    return this._http.get(this.url);
  }
}
