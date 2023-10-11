import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http: HttpClient) { }

  // các phương thức khác
  getList(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Contacts')
  }
  getTrash(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Contacts/Trash')
  }

  getContactById(contactId: any): Observable<any>{
    return this.http.get<any>('https://localhost:7015/api/Contacts/id?id=' + contactId)
  }

  replyContact(contactId: any, data: any): Observable<any> {
    return this.http.put<any>('https://localhost:7015/api/Contacts/id?ID=' + contactId, data);
  }

  delTrashContact(contactId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Contacts/DelTrash?ID=' + contactId);
  }

  reTrashContact(contactId: any): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Contacts/ReTrash?ID=' + contactId);
  }
  
  deleteContact(contactId: number): Observable<any> {
    return this.http.delete<any>('https://localhost:7015/api/Contacts/id?id=' + contactId)
  }
}