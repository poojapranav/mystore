import { Component } from '@angular/core';
import { Review } from './review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  reviewForm=new Review();
  submitForm():void{
    console.log(this.reviewForm);
  }
}
