import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import {  RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductGuardService } from './productlist/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductEntryComponent,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductlistComponent },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
        canActivate: [ProductGuardService]
      },
      { path: '', redirectTo: 'products', pathMatch: 'full' }
      //{ path: '**', component: PageNotFoundComponent }
    ], {useHash: true})
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
