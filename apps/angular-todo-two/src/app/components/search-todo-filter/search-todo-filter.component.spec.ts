import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchTodoFilterComponent } from './search-todo-filter.component';

describe('SearchTodoFilterComponent', () => {
  let component: SearchTodoFilterComponent;
  let fixture: ComponentFixture<SearchTodoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchTodoFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTodoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
