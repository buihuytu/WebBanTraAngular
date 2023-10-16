import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductImageService {

  constructor(private http: HttpClient) { }

  // các phương thức khác
  getList(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Products')
  }
  getTrash(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Products/GetTrash')
  }
  getById(productId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Products/id?id=' + productId)
  }
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>('https://localhost:7015/api/Products/id?id=' + productId)
  }

  addProduct(data: any): Observable<any> {
    return this.http.post<any>('https://localhost:7015/api/Products', data);
  }

  editProduct(productId: any, data: any): Observable<any> {
    return this.http.put<any>('https://localhost:7015/api/Products/id?ID=' + productId, data);
  }

  delTrashProduct(productId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Products/DelTrash?ID=' + productId);
  }

  ReTrashProduct(productId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Products/ReTrash?ID=' + productId);
  }

  ChangeStatus(productId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Products/ChangeStatus?ID=' + productId);
  }
}