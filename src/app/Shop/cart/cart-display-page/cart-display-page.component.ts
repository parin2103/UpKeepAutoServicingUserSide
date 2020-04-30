import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductDataService } from '../../Product/product-data.service';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-cart-display-page',
  templateUrl: './cart-display-page.component.html',
  styleUrls: ['./cart-display-page.component.css']
})
export class CartDisplayPageComponent implements OnInit {
  editProduct : FormGroup;
  ProductArr : string[] = [];
  removeArr : string []=[];
  selectedRemoveArr : string [] = [];
  constructor(private _productData : ProductDataService,private _cartdata: CartDataService) { }

  ngOnInit() {
    this.editProduct = new FormGroup({
      city : new FormControl(),
      zip : new FormControl(),
      state : new FormControl()
    });

    this._cartdata.getAllCart().subscribe(
      (CartData : any[])=>{
        console.log(CartData);
      }
    );
  }

  onRemoveClick()
  {

  }
  onProductEdit()
  {

  }
}
