import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '@schemas';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient, private firebase: AngularFirestore) {}

  async getTasks(): Promise<Observable<{ data: Task[] }[]>> {
    return this.firebase
      .collection<{ data: Task[] }>('Tasks')
      .valueChanges({ idField: 'id' });
  }

  deleteTask(task: Task): Observable<void> | null {
    if (!task.id) return null;

    return from(this.firebase.collection('Tasks').doc(task.id).delete());
  }

  updateTask(task: Task): Observable<void> | null {
    if (!task.id) return null;
    const { id, ...rest } = task;

    return from(
      this.firebase
        .collection('Tasks')
        .doc(task?.id)
        .update({ data: { ...rest } })
    );
  }

  async addTask(task: Task): Promise<Observable<Task>> {
    let docRef = this.firebase.collection('Tasks').add({ data: task });
    return from(docRef.then((doc) => ({ ...task, id: doc.id })));
  }
}
