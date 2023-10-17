import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductDetailService {

  constructor(private http: HttpClient) { }

  getProductDetail(slug: string): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Products/GetProduct/' + slug);
  }

  getOtherProduct(id: number): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Products/GetOtherProduct/' + id);
  }

  getListImgByProductId(id: number): Observable<any>{
    return this.http.get<any>('https://localhost:7015/api/ProductImages/productId?productId=' + id);
  }

}
