import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  // các phương thức khác
  getList(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Users')
  }

  getTrash(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Users/GetTrash')
  }

  getUserById(userId): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Users/id?id=' + userId)
  }

  createUser(data: any): Observable<any> {
    return this.http.post<any>('https://localhost:7015/api/Users', data)
  }

  delTrashUser(userId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Users/DelTrash?ID=' + userId);
  }

  ReTrashUser(userId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Users/ReTrash?ID=' + userId);
  }

  ChangeStatus(userId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Users/ChangeStatus?ID=' + userId);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>('https://localhost:7015/api/Users/id?id=' + userId)
  }

  editUser(userId: any, data: any): Observable<any> {
    return this.http.put<any>('https://localhost:7015/api/Users/id?ID=' + userId, data);
  }
}