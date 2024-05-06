import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-todo-filter',
  templateUrl: './search-todo-filter.component.html',
  styleUrl: './search-todo-filter.component.css',
})
export class SearchTodoFilterComponent {
  @Output() searchTodos: EventEmitter<string> = new EventEmitter<string>();
  @Input() isChanged: boolean = false;
  textToSearch: string = '';

  constructor() {}

  ngOnInit(): void {}

  searchResults() {
    this.searchTodos.emit(this.textToSearch);
  }
}
