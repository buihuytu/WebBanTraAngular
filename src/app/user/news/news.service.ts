import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }

  getAll(pageNo: number, pageSize: number): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/News/GetNewsList/pageNo/pageSize?pageNo=' + pageNo + '&pageSize='+ pageSize);
  }


}
