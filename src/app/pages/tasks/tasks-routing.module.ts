import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "../../guard/auth.guard";

import {ListComponent} from "./list.component";
import {NewComponent} from "./new.component";
import {IdComponent} from "./id.component";
import {EditComponent} from "./edit.component";
import {DoneComponent} from "./done.component";

const routes: Routes = [
  { path: "", component: ListComponent, canActivate: [AuthGuard]},
  { path: "new", component: NewComponent, canActivate: [AuthGuard]},
  { path: ":id", component: IdComponent, canActivate: [AuthGuard]},
  { path: ":id/edit", component: EditComponent, canActivate: [AuthGuard]},
  { path: ":id/done", component: DoneComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
