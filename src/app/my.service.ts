import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class MyService {

  constructor(private http: Http) { }
  setHttpHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');
    return headers;
  }
  getData() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
}
