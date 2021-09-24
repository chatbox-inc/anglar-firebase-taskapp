import { Component, OnInit } from '@angular/core';
import {Task} from "../../interfaces/task.interface";
import {TaskService} from "../../services/task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task-done',
  templateUrl: './done.component.html',
})
export class DoneComponent implements OnInit {

  task: Task | null = null
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id") as string
    this.taskService.getTask(id).subscribe(task => this.task = task)
  }

  deleteTask() {
    if(!this.task) return;
    this.taskService.deleteTask(this.task)
    this.router.navigate(["/tasks"])
  }
}
