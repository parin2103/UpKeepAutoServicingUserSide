export class Product_class {

  public constructor(
    public product_id : number,
    public product_name : string,
    public product_description : string,
    public fk_cat_id : number,
    public color  : string,
    public fk_cat_name : string,
    public product_price : string,
    public product_image : string,
    public quality : string
   ) {
  }

}
