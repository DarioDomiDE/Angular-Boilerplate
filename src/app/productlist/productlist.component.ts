import { Component, OnInit } from '@angular/core';
import { IProduct } from './iproduct';
import { ProductService } from './product.service';

@Component({
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: IProduct[]
  errorMessage: string;

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this._productService.getProducts()
        .subscribe(
          products => this.products = products,
          error => this.errorMessage = <any>error
        )
  }

  onNotify(id: number) : void {
    console.log("onNotify: " + id);
  }

}
