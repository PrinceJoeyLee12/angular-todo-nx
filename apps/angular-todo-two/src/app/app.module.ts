import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.production';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { UppercasePipe } from './Pipes/uppercase.pipe';
import { SetBackgroundDirective } from './CustomDirectives/backgroud.directives';
import { FilterTodoComponent } from './components/filter-todo/filter-todo.component';
import { SearchTodoFilterComponent } from './components/search-todo-filter/search-todo-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskItemComponent,
    HeaderComponent,
    ButtonComponent,
    AddTaskComponent,
    UppercasePipe,
    SetBackgroundDirective,
    FilterTodoComponent,
    SearchTodoFilterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
