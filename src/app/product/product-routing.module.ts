import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReviewComponent } from './review/review.component';

const routes:Routes=[
  {path:'product',component:ProductListComponent,title:'Mystore|product'},
  {path:'product/:id',
  component:ProductDetailComponent,
  children:[{
    path:'review',
    component:ReviewComponent
  }]
  }]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class ProductRoutingModule { }
