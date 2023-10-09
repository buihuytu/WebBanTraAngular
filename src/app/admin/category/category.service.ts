import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient) { }

  // các phương thức khác
  getList(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Categories')
  }
  getTrash(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Categories/GetTrash')
  }
  getById(cateId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Categories/id?id=' + cateId)
  }
  deleteCate(cateId: number): Observable<any> {
    return this.http.delete<any>('https://localhost:7008/api/Products/id?id=' + cateId)
  }

  addCate(data: any): Observable<any> {
    return this.http.post<any>('https://localhost:7008/api/Products', data);
  }

  editCate(cateId: any, data: any): Observable<any> {
    return this.http.put<any>('https://localhost:7008/api/Products/id?id=' + cateId, data);
  }
}