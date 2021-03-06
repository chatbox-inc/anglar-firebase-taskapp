import { Component, OnInit } from '@angular/core';
import {Task} from "../../interfaces/task.interface";
import {TaskService} from "../../services/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-new',
  templateUrl: './new.component.html',
})
export class NewComponent implements OnInit {

  task: Task = {
    name: null,
    date_on: null,
    body: null
  }
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createTask() {
    if (!this.task.name || !this.task.body || !this.task.date_on) {
      alert("未入力の値があります")
      return
    }
    this.taskService.createTask(this.task)
    this.router.navigate(["/tasks"])
  }
}
