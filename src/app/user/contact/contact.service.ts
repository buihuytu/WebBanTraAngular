import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) { }

  add(data: any): Observable<any> {
    return this.http.post<any>('https://localhost:7008/api/Products', data);
  }


}
