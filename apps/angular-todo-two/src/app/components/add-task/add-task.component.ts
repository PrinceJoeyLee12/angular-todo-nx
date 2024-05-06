import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '@schemas';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  showAddTask: boolean = false;
  subscription: Subscription;

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleAddTask()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit(): void {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
