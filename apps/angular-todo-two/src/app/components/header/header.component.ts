import { Component, Input } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() hideButton: boolean = false;
  title: string = 'Todo App';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleAddTask()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTodo() {
    this.uiService.toggleAddTask();
  }
}
