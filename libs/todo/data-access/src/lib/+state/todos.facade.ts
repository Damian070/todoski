import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {TodosPartialState, Todo} from './todos.reducer';
import {todosQuery} from './todos.selectors';
import {fromTodosActions} from './todos.actions';
import {TodosDataAccessService} from "../services/todos-data-access.service";
import {Update} from "@ngrx/entity";

@Injectable()
export class TodosFacade {
  active$ = this.store.pipe(select(todosQuery.getActiveArray));
  finished$ = this.store.pipe(select(todosQuery.getFinishedArray));
  selected$ = this.store.pipe(select(todosQuery.getSelected));

  constructor(private store: Store<TodosPartialState>, private dataAccess: TodosDataAccessService) {}

  addTodo(todo: Todo) {
    this.store.dispatch(new fromTodosActions.AddTodo(todo));
  }
  editTodo(todo: Partial<Todo>) {
    this.store.dispatch(new fromTodosActions.EditTodo(todo));
  }
  deleteTodo(id: number) {
    this.store.dispatch(new fromTodosActions.DeleteTodo(id));
  }
  selectTodo(todo: Todo) {
    this.store.dispatch(new fromTodosActions.SelectTodo(todo));
  }
  cancelTodoSelection() {
    this.store.dispatch(new fromTodosActions.CancelTodoSelection());
  }
  setTodoAsFinished(todo: Todo) {
    this.store.dispatch(new fromTodosActions.FinishTodo(todo));
  }

  getPersistedTodos() {
    this.store.dispatch(
      new fromTodosActions.LoadTodosFromLocalStorage()
    )
  }

}
