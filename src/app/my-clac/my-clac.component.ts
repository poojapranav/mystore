import { Component } from '@angular/core';

@Component({
  selector: 'app-my-clac',
  templateUrl: './my-clac.component.html',
  styleUrls: ['./my-clac.component.css']
})
export class MyClacComponent {
  number1!:number;
  number2!:number;
  getresult(event:any)
  {
    console.log("message from child:"+event)
  }
}
