import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import {AppService} from './app.service';
import { TaskThreeComponent } from './task-three/task-three.component';
import { TaskFourComponent } from './task-four/task-four.component';
import { TaskFiveComponent } from './task-five/task-five.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { TaskTwoComponent } from './task-two/task-two.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    TaskThreeComponent,
    TaskFourComponent,
    TaskFiveComponent,
    TaskTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
