import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(value?: boolean): void {
    if (typeof value === 'boolean') {
      this.showAddTask = value;
    } else {
      this.showAddTask = !this.showAddTask;
    }
    this.subject.next(this.showAddTask);
  }

  onToggleAddTask(): Observable<any> {
    return this.subject.asObservable();
  }
}
