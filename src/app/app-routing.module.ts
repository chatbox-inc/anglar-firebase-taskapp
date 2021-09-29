import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "tasks", loadChildren: () => import("./pages/tasks/tasks.module").then(m=>m.TasksModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
