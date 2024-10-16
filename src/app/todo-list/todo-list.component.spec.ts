import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { provideHttpClient } from "@angular/common/http";

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent],
      providers: [
        provideHttpClient()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty todoText', () => {
    expect(component.form.get('todoText')?.value).toBe('');
  });

  it('should mark todoText as invalid when empty', () => {
    const todoTextControl = component.form.get('todoText');
    todoTextControl?.setValue('');
    expect(todoTextControl?.valid).toBeFalsy();
  });

  it('should mark todoText as valid when not empty', () => {
    const todoTextControl = component.form.get('todoText');
    todoTextControl?.setValue('New Todo');
    expect(todoTextControl?.valid).toBeTruthy();
  });
});
