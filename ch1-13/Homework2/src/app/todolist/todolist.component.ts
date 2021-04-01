import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Task } from './models/task';
import { v4 as uuidv4 } from 'uuid';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  tasks: Task[];

  @ViewChildren(TaskComponent)
  taskComponents: QueryList<TaskComponent>;

  constructor() {
    this.tasks = [];
  }

  ngOnInit(): void {}

  addTask(task: string, description: string): void {
    this.tasks.push(new Task(uuidv4(), task, description));
  }


  selectedTask(taskComponent: TaskComponent): void {
    console.log('work');
    this.taskComponents.forEach((task) => (task.isSelected = false));
    taskComponent.isSelected = true;
  }
}
