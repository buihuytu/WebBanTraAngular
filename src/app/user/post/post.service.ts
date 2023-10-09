import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  getPost(slug: string): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/News/GetNews/' + slug);
  }

  getOtherPost(id: number): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/News/GetOtherPost/' + id);
  }

}
