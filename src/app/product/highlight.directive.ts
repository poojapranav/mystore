import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
//ElementRef is giving the direct access to the element on which this 
//this directive will be applied,logic to manipulate the style
//style of the element
  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor="aqua";
    el.nativeElement.style.color="red";
   }

}
