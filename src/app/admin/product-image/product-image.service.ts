import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductImageService {

  constructor(private http: HttpClient) { }

  // các phương thức khác
  getListImage(productId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/ProductImages/productId?productId=' + productId)
  }
  
  deleteProduct(productId: number, imageId: any): Observable<any> {
    return this.http.delete<any>('https://localhost:7015/api/ProductImages/id?id=' + productId)
  }

  addProductImage(data: any): Observable<any> {
    return this.http.post<any>('https://localhost:7015/api/ProductImages/upload-nhieu-anh', data);
  }
}