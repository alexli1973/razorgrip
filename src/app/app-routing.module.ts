import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskOneComponent} from './task-one/task-one.component';
import {TaskThreeComponent} from './task-three/task-three.component';
import {TaskFourComponent} from './task-four/task-four.component';
import {TaskFiveComponent} from './task-five/task-five.component';
import {CommonModule} from '@angular/common';
import {TaskTwoComponent} from './task-two/task-two.component';

const routes: Routes = [
      {path: 'task-one', component: TaskOneComponent},
      {path: 'task-two', component: TaskTwoComponent},
      {path: 'task-three', component: TaskThreeComponent},
      {path: 'task-four', component: TaskFourComponent},
      {path: 'task-five', component: TaskFiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
