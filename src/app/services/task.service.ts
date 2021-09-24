import { Injectable } from '@angular/core';
import { Task } from "../interfaces/task.interface";
import { Observable } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  collection: AngularFirestoreCollection

  constructor(private afs: AngularFirestore) {
    this.collection = afs.collection("tasks")
  }

  getTasks(): Observable<any> {
    const tasks = this.collection.valueChanges({ idField: "id" })
    return tasks
  }

  getTask(id: string): Observable<any> {
    const task = this.collection.doc(id).valueChanges({ idField: "id" })
    return task
  }

  editTask({id,...payload}: Task): void {
    this.collection.doc(id).update(payload)
  }

  createTask(payload: Task): void {
    this.collection.add(payload)
  }

  deleteTask({id, ...payload}: Task): void {
    this.collection.doc(id).delete()
  }
}
