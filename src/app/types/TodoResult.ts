import { TodoItem } from "./TodoItem";

export type TodoResult =  {
  limit: number;
  skip: number;
  todos: TodoItem[];
  total: number;
}
