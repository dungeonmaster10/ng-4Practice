import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class MyService {

  constructor(private http:Http) { }
  getData(){
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
}
