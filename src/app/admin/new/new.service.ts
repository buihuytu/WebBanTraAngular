import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NewService {

  constructor(private http: HttpClient) { }

  // các phương thức khác
  getList(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/News')
  }

  getTrash(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/News/GetTrash')
  }

  getNewById(newId): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/News/id?id=' + newId)
  }

  createNew(data: any): Observable<any> {
    return this.http.post<any>('https://localhost:7015/api/News', data)
  }

  delTrashNew(newId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/News/DelTrash?ID=' + newId);
  }

  ReTrashNew(newId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/News/ReTrash?ID=' + newId);
  }

  ChangeStatus(newId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/News/ChangeStatus?ID=' + newId);
  }

  deleteNew(newId: number): Observable<any> {
    return this.http.delete<any>('https://localhost:7015/api/News/id?id=' + newId)
  }
}