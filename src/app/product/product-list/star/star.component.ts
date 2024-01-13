import { Component,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent  implements OnChanges{
  @Input()
  rating!:number;
  //! is used when you do not want to initilize
  //the value of the variable
  //rating variable is getting the value from parent
  //component that is product-list
  starWidth=16*this.rating;
  ngOnChanges(changes:SimpleChanges):void{
    console.log('ngonchanges called');
    this.starWidth=16*this.rating;
  }
}
