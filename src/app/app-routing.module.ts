import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyClacComponent } from './my-clac/my-clac.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ReviewComponent } from './product/review/review.component';
import { ProfileComponent } from './profile/profile.component';


const routes:Routes=[
  {path:'product',component:ProductListComponent,title:'Mystore|product'},
  {path:'product/:id',
  component:ProductDetailComponent,
  children:[{
    path:'review',
    component:ReviewComponent
  }]
  },
  {path:'home',component:HomeComponent,title:'Mystore|home'},
  {path:'product',loadChildren:()=>import(
      './product/product.module')
      .then(m=>m.ProductModule)
    },
  {path:'profile',component:ProfileComponent,title:'Mystore|profile'},
  {path:'calc',component:MyClacComponent,title:'Mystore|calc'},
  {path:" ",redirectTo:"/product",pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
  // {path:"**",redirectTo:"/calc"}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
