import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private productservice:ProductService)
  {}
  subscription$!:Subscription  
  cartCount=0;
    ngOnInit(): void {
      this.subscription$=this.productservice.cartcountsubject$
                          .subscribe(count=>this.cartCount=count)
    }
    ngOnDestroy():void{
      this.subscription$.unsubscribe();
    }
    getcartcount()
    {
       //this.cartCount=this.productservice.cartCount;
      //  this.productservice.cartcountsubject$
      //                     .subscribe(count=>this.cartCount=count)
     }
 
  //cartcount=0;
  title = 'Glitter store';
  primarytheme=true;
  themeclass={
    'bg-brown':this.primarytheme,//true
    'bg-cyan':!this.primarytheme//false
  }
  // themeclass={
  //   'bg-primary':false,
  //   'bg-brown':false,
  //   'bg-cyan':true
  // }
  toggletheme()
  {
    //console.log("theme changed");
    this.primarytheme=!this.primarytheme
    this.themeclass={
      'bg-brown':this.primarytheme,
      'bg-cyan':!this.primarytheme
    }
  }
  mousemove(){
    console.log("mouse over the button")
  }
 }


