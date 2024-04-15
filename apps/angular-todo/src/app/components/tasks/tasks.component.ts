import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../schemas/Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];
  showAddTask: boolean = false;

  constructor(private taskService: TaskService, private uiService: UiService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      if (!tasks?.length) {
        this.uiService.toggleAddTask();
      }
    });
  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((item) => item.id !== task.id))
      );
  }

  toggleReminder(task: Task): void {
    this.taskService.updateTask(task).subscribe(() => {
      this.tasks = this.tasks.reduce((acc: Task[], item: Task) => {
        let updatedItem = item;
        if (item.id === task.id) {
          updatedItem = {
            ...item,
            reminder: !item?.reminder,
          };
        }
        return [...acc, updatedItem];
      }, []);

      return this.tasks;
    });
  }

  createNewTask(task: Task): void {
    this.taskService.addTask(task).subscribe((newTask) => {
      this.tasks.push(newTask);
      return this.tasks;
    });
  }
}
