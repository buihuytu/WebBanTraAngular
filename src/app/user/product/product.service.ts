import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  

  constructor(private http: HttpClient) { }

  getAll(pageNo: number, pageSize: number, sortCode: number): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Products/GetProductList/pageNo/pageSize/sort?pageNo=' + pageNo + '&pageSize=' + pageSize + '&sort=' + sortCode);
  }


  getAllCategory(): Observable<any>{
    return this.http.get<any>('https://localhost:7015/api/Categories/GetAllCategories');
  }

  getAllProductByPriceRange(startRange: number, endRange: number, page: number): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Products/GetProductByPriceRange/page/min/max?min=' + startRange + '&max=' + endRange + '&page=' + page);
  }

  getProductByCategory(pageNo: number, pageSize: number, ids: number[]): Observable<any>{
    return this.http.post<any>('https://localhost:7015/api/Products/GetProductByCategory?pageNo=' + pageNo+ '&pageSize='+pageSize, ids);
  }
}
