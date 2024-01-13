import { Component, OnInit } from '@angular/core';
import {Product} from '../../product';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit
{
  constructor(private ps:ProductService)
{

}
products!:Product[];
errormessage=null;
ngOnInit():void
{
  this.ps.getProducts().subscribe(val=>
    {
    this.products=val;
    this.filteredproducts=val;
    
    
     });
}
  storename="mystore"
  imgStyle={
    'width.px':200,
    'height.px':200
  }
  titleStyles={
    'color':'red',
    'fontSize.em':2.5,
    // 'fontVariant':'small-caps'
  }
//   products:Product[]=[
//     {
//     id:1,
//     name:"one plus nord",
//     price:18000,
//     image:"assets/oneplus-nord-1.jpg",
//     code:"M-001",
//     rating:4,
//     publishedDate:"Sun Nov 19 2023 20:37:21 GMT+0530 (India Standard Time)",
//     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
//    },
//    {
//     id:2,
//     name:"Iphone 13",
//     price:120000,
//     image:"assets/Iphone13.jpg",
//     code:"I-003",
//     rating:4.5,
//     publishedDate:"Sun Nov 19 2023 20:37:21 GMT+0530 (India Standard Time)",
//     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
//    },
//    {
//     id:3,
//     name:"LG TV",
//     price:18000,
//     image:"assets/LGTV.jpg",
//     code:"LG-001",
//     rating:3.5,
//     publishedDate:"Sun Nov 19 2023 20:37:21 GMT+0530 (India Standard Time)",
//     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
//    },
//    {
//     id:4,
//     name:"samsung washing machine",
//     price:60000.3456,
//     image:"assets/wasingmachine.jpg",
//     code:"S-001",
//     rating:5,
//     publishedDate:"Sun Nov 19 2023 20:37:21 GMT+0530 (India Standard Time)",
//     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
//    },
//    {
//     id:5,
//     name:"Apple Watch",
//     price:15000,
//     image:"assets/applewatch.jpg",
//     code:"AW-002",
//     rating:4.5,
//     publishedDate:"Sun Nov 19 2023 20:37:21 GMT+0530 (India Standard Time)",
//     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
//    },
//    {
//     id:6,
//     name:"oppo",
//     price:22000,
//     image:"assets/oppo1.jpg",
//     code:"O-001",
//     rating:5,
//     publishedDate:"Sun Nov 19 2023 20:37:21 GMT+0530 (India Standard Time)",
//     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
//    }
// ]
inputValue='';
showImage=true
private _filterBy='';
get filterBy():string
{

  //this._filterBy="hello"
  return this._filterBy;
}
set filterBy(fb:string)
{
  this._filterBy=fb;
  // console.log("setter called")
  // console.log(fb)
  this.filterproduct(this._filterBy)
}
// products!:Product[];
filteredproducts=this.products

filterproduct(searchValue:string)
{
  //logic for filetring the product
  this.filteredproducts=this.products.filter(product=>product.name.toLowerCase().includes(searchValue));
}


addtocart(event:MouseEvent,product:any,message?:string)
{
  // console.log("add to cart");
  // console.log("addto cart:"+product.name+"with the price"+product.price)
  // console.log(message);
  // console.log(event.x+""+event.y)
  this.ps.increment();
  //console.log(this.ps.cartCount);
}

}
