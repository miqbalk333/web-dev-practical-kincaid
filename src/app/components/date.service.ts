import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private http: HttpClient) { }

  getDate() {
    return this.http.get('https://admin.kincaidit.com/api/');
  }
}
