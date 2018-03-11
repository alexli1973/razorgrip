import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFiveComponent } from './task-five.component';

describe('TaskFiveComponent', () => {
  let component: TaskFiveComponent;
  let fixture: ComponentFixture<TaskFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
