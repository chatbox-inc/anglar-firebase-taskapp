import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


import { TasksRoutingModule } from './tasks-routing.module';
import { TaskFormComponent } from '../../components/task/task-form.component';

import { ListComponent } from './list.component';
import { IdComponent } from './id.component';
import { NewComponent } from './new.component';
import { EditComponent } from './edit.component';
import { DoneComponent } from './done.component';

import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatIconModule
]

@NgModule({
  declarations: [
    ListComponent,
    IdComponent,
    NewComponent,
    EditComponent,
    DoneComponent,
    TaskFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
    ...materialModules
  ]
})
export class TasksModule { }
