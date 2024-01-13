import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
constructor(private route:ActivatedRoute,
            private ps:ProductService,
            private router:Router
  ){}
  id!:number;
  product!:Product;
  ngOnInit():void{
      this.route.paramMap.subscribe(params=>{
        this.id=Number(params.get('id'));
        this.ps.getProductById(this.id).subscribe(product=>{
          console.log(product);
          this.product=product;
        })
      })
  }
  goBack():void{
    this.router.navigate(['/product'])
  }
  goPrev():void{
    this.id--;
    this.router.navigate(['/product',this.id ])
  }
  goNext():void{
    this.id++;
    this.router.navigate(['/product',this.id ])
  }
}
