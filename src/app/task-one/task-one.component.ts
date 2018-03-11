import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Task} from '../models/task';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private getData: AppService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.getData.getTasks().subscribe((data) => {
      this.tasks = data['frontend_home_questionnaire'].tasks;
      length = this.tasks.length;
     // console.log(this.tasks);
    });
  }

  getPrev() {
    this.tasks.unshift(this.tasks[length - 1]);
    this.tasks.pop();
  }

  getNext() {
    this.tasks.push(this.tasks[0]);
    this.tasks.shift();
  }
}
