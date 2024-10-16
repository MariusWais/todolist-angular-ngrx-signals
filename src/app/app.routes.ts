import { Routes } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
