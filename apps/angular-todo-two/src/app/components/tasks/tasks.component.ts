import { Component } from '@angular/core';
import { Task } from '@schemas';
import { TaskService } from '../../services/task.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];
  showAddTask: boolean = false;
  allTasks: Task[] = [];
  filteredBy: string = 'All';
  isChanged: boolean = false;

  constructor(private taskService: TaskService, private uiService: UiService) {}

  ngOnInit(): void {
    this.taskService.getTasks().then((response) =>
      response.subscribe((tasks) => {
        this.tasks = tasks.reduce(
          (acc: Task[], item: any) => [...acc, { id: item?.id, ...item.data }],
          []
        );
        this.allTasks = this.tasks;
        this.tasks = this.onFilterTasks(this.filteredBy);
        if (!tasks?.length) {
          this.uiService.toggleAddTask(true);
        }
      })
    );
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task)?.subscribe(() => {
      const filteredTasks = (this.tasks = this.tasks.filter(
        (item) => item.id !== task.id
      ));
      return filteredTasks;
    });
  }

  toggleReminder(task: Task): void {
    const newTaskData: Task = {
      ...task,
      reminder: !task.reminder,
    };
    this.taskService.updateTask(newTaskData);
  }

  async createNewTask(task: Task): Promise<void> {
    await this.taskService.addTask(task);
  }

  onFilterTasks(isFilterReminder: string) {
    this.filteredBy = isFilterReminder;

    this.tasks =
      isFilterReminder !== 'All'
        ? isFilterReminder === 'Reminder'
          ? this.allTasks.filter((t) => t.reminder)
          : this.allTasks.filter((t) => !t.reminder)
        : this.allTasks;
    return this.tasks;
  }

  onChange() {
    this.isChanged = !this.isChanged;
  }

  allTodoCount(): number {
    return this.allTasks.length;
  }

  allNeedsReminder(): number {
    return this.allTasks.filter((task) => task.reminder)?.length;
  }

  allNoReminder(): number {
    return this.allTasks.filter((task) => !task.reminder)?.length;
  }

  onSearchTodos(stringToSearch: string) {
    const tasks = this.onFilterTasks(this.filteredBy);
    this.tasks = stringToSearch
      ? tasks?.filter((task) =>
          task?.text?.toLowerCase().includes(stringToSearch.toLowerCase())
        )
      : tasks;
  }

  onClickClose() {
    return false;
  }
}
