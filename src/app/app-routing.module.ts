import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {TasksComponent} from "./task/tasks.component";
import {TaskNewComponent} from "./task/task-new.component";
import {TaskDetailComponent} from "./task/task-detail.component";
import {TaskEditComponent} from "./task/task-edit.component";
import {TaskDoneComponent} from "./task/task-done.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  { path: "tasks", component: TasksComponent, canActivate: [AuthGuard]},
  { path: "tasks/new", component: TaskNewComponent, canActivate: [AuthGuard]},
  { path: "tasks/:id", component: TaskDetailComponent, canActivate: [AuthGuard]},
  { path: "tasks/:id/edit", component: TaskEditComponent, canActivate: [AuthGuard]},
  { path: "tasks/:id/done", component: TaskDoneComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
