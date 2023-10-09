import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) { }

  // các phương thức khác
  getListSlider(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Sliders')
  }

  
}
