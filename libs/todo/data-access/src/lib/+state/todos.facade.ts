import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {TodosPartialState, Todo} from './todos.reducer';
import {todosQuery} from './todos.selectors';
import {fromTodosActions} from './todos.actions';

@Injectable()
export class TodosFacade {
  active$ = this.store.pipe(select(todosQuery.getActiveArray));
  finished$ = this.store.pipe(select(todosQuery.getFinishedArray));
  selected$ = this.store.pipe(select(todosQuery.getSelected));

  constructor(private store: Store<TodosPartialState>) {}

  addTodo(todo: Todo):void {
    this.store.dispatch(new fromTodosActions.AddTodo(todo));
  }
  editTodo(todo: Partial<Todo>):void {
    this.store.dispatch(new fromTodosActions.EditTodo(todo));
  }
  deleteTodo(id: number):void {
    this.store.dispatch(new fromTodosActions.DeleteTodo(id));
  }
  selectTodo(todo: Todo):void {
    this.store.dispatch(new fromTodosActions.SelectTodo(todo));
  }
  cancelTodoSelection():void {
    this.store.dispatch(new fromTodosActions.CancelTodoSelection());
  }
  setTodoAsFinished(todo: Todo):void {
    this.store.dispatch(new fromTodosActions.FinishTodo(todo));
  }

  getPersistedTodos():void {
    this.store.dispatch(
      new fromTodosActions.LoadTodosFromLocalStorage()
    )
  }

}
