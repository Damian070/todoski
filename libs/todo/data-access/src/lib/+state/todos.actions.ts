import { Action } from '@ngrx/store';

import TodoListInterface from "../../../../domain/src/lib/interfaces/todoList.interface";

import { Todo}from '@todo/todo/domain'

export namespace fromTodosActions {


  export enum Types {
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
    readonly  type = Types.FinishTodo;

    constructor(public payload: Todo) {}
  }

  export class AddTodo implements Action {
    readonly type = Types.AddTodo;

    constructor(public  payload: Todo) {}
  }

  export class DeleteTodo implements Action {
    readonly type = Types.DeleteTodo;

    constructor(public  payload: number) {}
  }

  export class EditTodo implements Action {
    readonly  type = Types.EditTodo;

    constructor(public  payload: Partial<Todo>) {}
  }

  export class SelectTodo implements Action {
    readonly  type = Types.SelectTodo;

    constructor(public  payload: Todo) {}
  }

  export class CancelTodoSelection implements Action{
    readonly type = Types.CancelTodoSelection;
  }

  export class LoadTodosFromLocalStorage  implements Action{
    readonly type = Types.LoadTodosFromLocalStorage;
  }

  export class UpdateTodosFromDP  implements Action{
    readonly type = Types.UpdateTodosFromDP;

    constructor(public payload: TodoListInterface) {}
  }

  export type CollectiveType = DeleteTodo
    | EditTodo
    | AddTodo
    | CancelTodoSelection
    | SelectTodo
    | FinishTodo
    | LoadTodosFromLocalStorage
    | UpdateTodosFromDP;
}
