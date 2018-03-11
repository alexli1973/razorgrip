import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Customer} from '../models/customer';
import {Country} from '../models/country';
import {City} from '../models/city';
import {Result} from '../models/result';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {
  customers: Customer[] = [];
   // country: Country;
   country = new Map();
   countries = new Set();
   cities = new Set();

  constructor(private getData: AppService) { }

  ngOnInit() {
    this.getCustomers();
   // this.sortByCountryName();
  }

  getCustomers() {
    this.getData.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data['Customers'];
      for (let i = 0; i < this.customers.length; i++) {
          this.countries.add(this.customers[i].Country);
          this.cities.add(this.customers[i].City);
      }
       console.log(this.countries);
       console.log(this.cities);
    });
  }

}
