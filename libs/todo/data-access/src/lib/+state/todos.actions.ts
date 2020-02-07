import { Action } from '@ngrx/store';

import TodoListInterface from "../../../../domain/src/lib/interfaces/todoList.interface";
import {Todo} from "../../../../domain/src/lib/interfaces/todo.interface";

export enum TodosActionTypes {
  AddTodo = '[Todos] Add Todo',
  DeleteTodo = '[Todos] Delete Todo',
  EditTodo = '[Todos] Edit Todo',
  SelectTodo = '[Todos] Select Todo',
  CancelTodoSelection= '[Todos] Cancel Todo Edit',
  FinishTodo = '[Todos] Finish Todo',
  LoadTodosFromLocalStorage = '[Todos] Load Todos From Local Storage',
  UpdateTodosFromDP = '[Todos] Update Todos From DP'
}

export class FinishTodo implements  Action {
  readonly  type = TodosActionTypes.FinishTodo;

  constructor(public payload: Todo) {}
}

export class AddTodo implements Action {
  readonly type = TodosActionTypes.AddTodo;

  constructor(public  payload: Todo) {}
}

export class DeleteTodo implements Action {
    readonly type = TodosActionTypes.DeleteTodo;

    constructor(public  payload: number) {}
}

export class EditTodo implements Action {
  readonly  type = TodosActionTypes.EditTodo;

  constructor(public  payload: Partial<Todo>) {}
}

export class SelectTodo implements Action {
  readonly  type = TodosActionTypes.SelectTodo;

  constructor(public  payload: Todo) {}
}

export class CancelTodoSelection implements Action{
  readonly type = TodosActionTypes.CancelTodoSelection;
}

export class LoadTodosFromLocalStorage  implements Action{
  readonly type = TodosActionTypes.LoadTodosFromLocalStorage;
}

export class UpdateTodosFromDP  implements Action{
  readonly type = TodosActionTypes.UpdateTodosFromDP;

  constructor(public payload: TodoListInterface) {}
}

export type TodosAction = DeleteTodo
| EditTodo
| AddTodo
| CancelTodoSelection
| SelectTodo
| FinishTodo
| LoadTodosFromLocalStorage
    | UpdateTodosFromDP;

export const fromTodosActions = {
  DeleteTodo,
  EditTodo,
  AddTodo,
  CancelTodoSelection,
  SelectTodo,
  FinishTodo,
  LoadTodosFromLocalStorage,
  UpdateTodosFromDP
};
