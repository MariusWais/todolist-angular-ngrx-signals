import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { TodoStore } from "../todo.store";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})

export class TodoListComponent {
  public readonly store = inject(TodoStore);
  private readonly fb = inject(FormBuilder);
  showError = false;

  public form = this.fb.group({
    todoText: ['', [
      Validators.required,
      Validators.maxLength(50)
    ]]
  });

  public async onAddTodo() {
    this.showError = true;
    if (this.form.valid) {
      await this.store.addTodo(this.form.value.todoText ?? '');
      this.form.reset();
      this.showError = false;
    } else {
      this.form.markAllAsTouched();
    }
  }
}
