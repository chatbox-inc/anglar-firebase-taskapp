import { Component, OnInit } from '@angular/core';
import {Task} from "../interfaces/task.interface";
import {TaskService} from "../services/task.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
})
export class TaskDetailComponent implements OnInit {

  task: Task | null = null
  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id") as string
    // 変更
    this.taskService.getTask(id).subscribe(task => this.task = task)
  }
}
