import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-product-display-page',
  templateUrl: './product-display-page.component.html',
  styleUrls: ['./product-display-page.component.css']
})
export class ProductDisplayPageComponent implements OnInit {
  ProductArr : string [] =[];
  ProductImg : string ;
  constructor(private _productData : ProductDataService) { }

  ngOnInit() {
    this._productData.getAllProduct().subscribe(
      (ProductData : any[])=>{
        // console.log(ProductData);
        this.ProductArr = ProductData;
        console.log(this.ProductArr);
      }
    );

    this._productData.getAllImg().subscribe(
      (ProductImg : any[])=>{
        console.log(ProductImg);
        this.ProductImg =  environment.url + 'public/Images/Product_image/'+ ProductImg ;
        console.log(this.ProductImg);
      }
    );

  }

}
