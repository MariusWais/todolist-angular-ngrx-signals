import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";
import { TodoResult } from "./types/TodoResult";
import { TodoItem } from "./types/TodoItem";

const apiUrl = `https://dummyjson.com/todos`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly http = inject(HttpClient);

  private url = `${apiUrl}`;
  private userId = 1;

  public getItems(): Promise<TodoResult> {
    return lastValueFrom(this.http.get<TodoResult>(this.url + `/user/${this.userId}?limit=0`));
  }

  public addItem(todoText: string): Promise<TodoItem> {
    const todo: TodoItem = {
      todo: todoText,
      userId: this.userId,
      completed: false
    }

    return lastValueFrom(this.http.post<TodoItem>(this.url + '/add', todo));
  }
}
