import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input()
  task: Task;

  @Output()
  OnSelectedTask: EventEmitter<TaskComponent> = new EventEmitter<TaskComponent>();
  isSelected = false;

  constructor() {}

  ngOnInit(): void {}


  select(): void {
    this.OnSelectedTask.emit(this);
  }
}
