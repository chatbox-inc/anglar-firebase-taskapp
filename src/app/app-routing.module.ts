import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./pages/tasks/list.component";
import {NewComponent} from "./pages/tasks/new.component";
import {IdComponent} from "./pages/tasks/id.component";
import {EditComponent} from "./pages/tasks/edit.component";
import {DoneComponent} from "./pages/tasks/done.component";
import {AuthGuard} from "./guard/auth.guard";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: "tasks", component: ListComponent, canActivate: [AuthGuard]},
  { path: "tasks/new", component: NewComponent, canActivate: [AuthGuard]},
  { path: "tasks/:id", component: IdComponent, canActivate: [AuthGuard]},
  { path: "tasks/:id/edit", component: EditComponent, canActivate: [AuthGuard]},
  { path: "tasks/:id/done", component: DoneComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
