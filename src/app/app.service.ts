import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Task} from './models/task';

@Injectable()
export class AppService {

  constructor(public http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get('../assets/homeassignment.json');
  }

  getCustomers(): Observable<any> {
    return this.http.get('http://northwind.servicestack.net/customers.json');
  }

}
