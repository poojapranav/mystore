import { Component,Input,Output,OnChanges,SimpleChanges,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-result',
  templateUrl: './my-result.component.html',
  styleUrls: ['./my-result.component.css']
})
export class MyResultComponent implements OnChanges{
  @Input()
  num1!:number;
  @Input()
  num2!:number;
  @Output()
  resultEmit=new EventEmitter<string>();
  //result=this.num1+this.num2;
  result=0;
ngOnChanges(changes:SimpleChanges):void{
  this.result=this.num1+this.num2;
}
sendResult()
{
  this.resultEmit.emit("result:"+this.result);
}

  
}
