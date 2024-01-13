import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {of,from,range, Observable, map,first,last,filter,delay,interval,Subscription,Subject, catchError, throwError} from 'rxjs'
import { Product } from '../product';
@Injectable({
  providedIn: 'root'//specifies that this service can be injected 
                    //anywhere in your project
 // providedIn:'Appmodule'//specifies that this serice can be injected
                        //in the component of the appmodule
  //providedIn:'ProductListComponent'//specifies that this service can be
                        // injected in productlistcomponent
})
export class ProductService {

  private cartCount=0//this variable is my shared resource whose value can be updated 
  //in 1 component here product-list button and be read in another
  // another component here app badge
  cartcountsubject$=new Subject<number>();
  //values$=of(1,2,3)
  //values$=of(1,2,3,4,'hello',true,[10,20,30])
  //values$=range(5,10);
  //colors=["red","blue","yellow"]
  //colors$=from(this.colors)
  //create custom observables
  // myobservable$=new Observable(observer=>{
  //   observer.next(10);
  //   observer.next(20);
  //   observer.next(30);
  // })
  // myobservable$=new Observable(observer=>{
  //   observer.next(10);
  //   observer.next(20);
  //   observer.complete()
  //   observer.next(30);
  // })
  // myNumbers$=of(1,2,3,4,5,8);//2,4,8,4,16
  // myinterval$=interval(2000)
  // subscription$!:Subscription;
  mysubject$=new Subject<number>();
  // constructor() { 
    //console.log(this.values$);
   // this.values$.subscribe(value=>console.log("value:"+value))
   //this.values$.subscribe(value=>console.log(value))
   //this.values$.subscribe(value=>console.log(value));
   //this.colors$.subscribe(value=>console.log(value))
   //this.myobservable$.subscribe(value=>console.log(value))
   //this.myobservable$.subscribe(value=>console.log("sub A:"+value))
   //this.myobservable$.subscribe(value=>console.log("sub B:"+value))
  //  this.myobservable$.subscribe({
  //   next.val=>console.log(val),
  //   complete:()=>console.log("observable complete")
  //  })
  //==========================================
  // this.myNumbers$.pipe(map(val=>val*val))
  //                 .subscribe(val=>console.log(val))
  //=====================================================
  // this.myNumbers$.pipe(first())
  //                 .subscribe(val=>console.log(val))
  // }
  //================================
  // this.myNumbers$.pipe(last())
  //                 .subscribe(val=>console.log(val))
  //======================================
  // this.myNumbers$.pipe(filter(val=>val%2==0))
  //                 .subscribe(val=>console.log(val))
  //===========================================
  // this.myNumbers$.pipe(map((val=>val*val)),
  //                   filter(val=>val%2==0))
  //                 .subscribe(val=>console.log(val))
  //=========================================
  // this.myNumbers$.pipe(filter(val=>val%2==0),
  //                       map(val=>val*val),
  //                       delay(3000))
  //                 .subscribe(val=>console.log(val));
  //==============================
 // this.subscription$=this.myinterval$.subscribe(val=>console.log("Sub A:"+val))
  //this.subscription$=this.myinterval$.subscribe(val=>console.log("Sub B:"+val))
  //setTimeout()-function is builtin function of javascript
        //which will call a callback function after the defined
        //time period
  // setTimeout(()=>{
  //   this.subscription$.unsubscribe();
  // },10000);
 //==================================
//  this.mysubject$.next(1);
//  this.mysubject$.subscribe(val=>console.log("Sub A:"+val));
//  this.mysubject$.next(2);
//  this.mysubject$.next(100);
//  this.mysubject$.subscribe(val=>console.log("Sub b"+val));
//  this.mysubject$.next(20);
//   }
  constructor(private http:HttpClient){}
  getProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>("http://localhost:3000/products")
                    .pipe(catchError(this.handleError))
  }
  getProductById(id:number):Observable<Product>
  {
    return this.http.get<Product>("http://localhost:3000/products/"+id)
  }
  handleError(error:HttpErrorResponse)
  {
    console.log("status code:"+error.status)
    console.log("Message:"+error.message)
    return throwError(()=>error.message)
  }
  increment():void{
    this.cartCount++;
    this.cartcountsubject$.next(this.cartCount)
  }
}
