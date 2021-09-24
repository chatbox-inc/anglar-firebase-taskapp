import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TasksComponent} from "./task/tasks.component";
import {TaskNewComponent} from "./task/task-new.component";
import {TaskDetailComponent} from "./task/task-detail.component";
import {TaskEditComponent} from "./task/task-edit.component";
import {TaskDoneComponent} from "./task/task-done.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  { path: "tasks", component: TasksComponent},
  { path: "tasks/new", component: TaskNewComponent },
  { path: "tasks/:id", component: TaskDetailComponent },
  { path: "tasks/:id/edit", component: TaskEditComponent },
  { path: "tasks/:id/done", component: TaskDoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
