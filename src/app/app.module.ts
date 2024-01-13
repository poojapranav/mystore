import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacePipe } from './product/convert-to-space.pipe';
import { HighlightDirective } from './product/highlight.directive';
// import { StarComponent } from './product-list/star/star.component';
import { MyClacComponent } from './my-clac/my-clac.component';
import { MyResultComponent } from './my-clac/my-result/my-result.component';
import { ProductService } from './service/product.service';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ReviewComponent } from './product/review/review.component';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
// import { ProductDetailComponent } from './product/product-detail/product-detail.component';
// import { ReviewComponent } from './review/review.component';

//route for each component is part of routes array
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
  {path:'profile',component:ProfileComponent,title:'Mystore|profile'},
  {path:'calc',component:MyClacComponent,title:'Mystore|calc'},
  {path:" ",redirectTo:"/product",pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent},
  // {path:"**",redirectTo:"/calc"}
]
@NgModule({
  declarations: [
    AppComponent,
    // ProductListComponent,
    // ConvertToSpacePipe,
    // HighlightDirective,
    // StarComponent,
    MyClacComponent,
    MyResultComponent,
    HomeComponent,
    ProfileComponent,
    PageNotFoundComponent,
    // ProductDetailComponent,
    // ReviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    // ProductModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


