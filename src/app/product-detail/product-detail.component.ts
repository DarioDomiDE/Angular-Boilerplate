import { Component, OnInit } from '@angular/core';
import { IProduct } from '../productlist/iproduct';
import { ProductService } from '../productlist/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  product: IProduct;

  constructor(private _productService: ProductService,
              private _route: ActivatedRoute
  ) {
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this._productService.getProduct(this.id)
        .subscribe(
          product => {
            this.product = product;
          },
          error => console.log(error)
        )
  }

}
