import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../interfaces/task.interface";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input()
  task!: Task

  @Input()
  disabled: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
