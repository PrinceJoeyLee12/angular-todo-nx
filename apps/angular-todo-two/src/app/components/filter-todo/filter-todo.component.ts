import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Task } from '@schemas';

@Component({
  selector: 'app-filter-todo',
  templateUrl: './filter-todo.component.html',
  styleUrl: './filter-todo.component.css',
})
export class FilterTodoComponent {
  @Output() filterTodo: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Input() tasks: Task[] = [];

  filterTodoReminder: string = 'All';
  isChanged: boolean = false;

  @Input() needsReminderTasks: number = 0;
  @Input() noReminderTasks: number = 0;
  @Input() allTasks: number = 0;

  constructor() {}

  onFilterTodo() {
    this.filterTodo.emit(this.filterTodoReminder);
  }
  onClickChange() {
    this.onChange.emit(this.isChanged);
  }
}
