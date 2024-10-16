import { patchState, signalStore, signalStoreFeature, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { computed, inject } from "@angular/core";
import { TodoService } from "./todo.service";
import { TodoState } from "./types/TodoState";

const initialState: TodoState = {
  todos: []
}

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withLoading(),
  withMethods((store, todoService = inject(TodoService)) => ({
    async loadAllTodos() {
      store.setLoading();
      const todoResult = await todoService.getItems();
      patchState(store, { todos: todoResult.todos });
      store.setCompleted();
    },
    async addTodo(todoText: string) {
      store.setLoading();
      const newTodo = await todoService.addItem(todoText);
      patchState(store, {
        todos: [...store.todos(), newTodo]
      });
      store.setCompleted();
    }
  })),
  withComputed(({ todos }) => ({
      countTodos: computed(() => todos().length),
      filteredTodos: computed(() => (needle: string) =>
        todos().filter((todoItem) => todoItem.todo.includes(needle))
      )
    }),
  ),
  withHooks({
    onInit({ loadAllTodos }) {
      loadAllTodos();
    },
    onDestroy() {
      console.log('on destroy');
    },
  })
);

export function withLoading() {
  return signalStoreFeature(
    withState({ loading: false }),

    withMethods((store) => {
      return {
        setLoading() {
          patchState(store, { loading: true });
        },
        setCompleted() {
          patchState(store, { loading: false });
        }
      }
    })
  )
}
