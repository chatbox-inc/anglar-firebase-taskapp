import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";


import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";

import { HeaderComponent } from './components/layouts/header.component';
import { TaskFormComponent } from './components/task/task-form.component';
import { ListComponent } from './pages/tasks/list.component';
import { IdComponent } from './pages/tasks/id.component';
import { NewComponent } from './pages/tasks/new.component';
import { EditComponent } from './pages/tasks/edit.component';
import { DoneComponent } from './pages/tasks/done.component';
import { HomeComponent } from './pages/home/home.component';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatDividerModule,
  MatIconModule
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskFormComponent,
    ListComponent,
    IdComponent,
    NewComponent,
    EditComponent,
    DoneComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
