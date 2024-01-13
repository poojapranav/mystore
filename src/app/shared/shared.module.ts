import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacePipe } from '../product/convert-to-space.pipe';
import { HighlightDirective } from '../product/highlight.directive';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConvertToSpacePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ConvertToSpacePipe,
    HighlightDirective,
    FormsModule,
    BrowserModule,
    RouterModule
  ]
})
export class SharedModule { }
