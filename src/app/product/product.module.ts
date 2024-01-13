import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReviewComponent } from './review/review.component';
import { StarComponent } from './product-list/star/star.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { ConvertToSpacePipe } from './convert-to-space.pipe';
// import { HighlightDirective } from './highlight.directive';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ReviewComponent,
    StarComponent,
    // ConvertToSpacePipe,
    // HighlightDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
