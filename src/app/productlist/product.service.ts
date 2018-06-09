import { Injectable } from '@angular/core';
import { IProduct } from './iproduct';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {

  private productUrl = './api/products/products.json';
  results: IProduct[];

  constructor(private _http: HttpClient) {
    this.results = [];
  }

  getProducts(): Observable<IProduct[]> {

    if(this.results.length != 0) {
      let observer = new Observable<IProduct[]>((o) => {
        o.next(this.results);
        o.complete();
      })
      return observer;
    }

    return this._http.get<IProduct[]>(this.productUrl)
                .do(data => {
                  console.log('Retrieve data', data)
                  this.results = data
                })
                .catch(this.handleError)
  }

  getProduct(id: number): Observable<IProduct> {
      let observer = new Observable<IProduct>((o) => {
        this.getProducts().subscribe(
          products => {
            o.next(products.find(x => x.id == id));
            o.complete();
          },
         error => {
            o.error(error);
            o.complete();
          }
        )
      })
      return observer;
  }

  private handleError(err: HttpErrorResponse) {
    console.log("Cant get data! :'(", err);
    return Observable.throw(err);
  }

}
