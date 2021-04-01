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
  OnDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output()
  OnSelectedTask: EventEmitter<TaskComponent> = new EventEmitter<TaskComponent>();
  isSelected = false;

  constructor() {}

  ngOnInit(): void {}

  deleteTask(task: Task): void {
    this.OnDeleteTask.emit(task);
  }

  select(): void {
    this.OnSelectedTask.emit(this);
  }
}
