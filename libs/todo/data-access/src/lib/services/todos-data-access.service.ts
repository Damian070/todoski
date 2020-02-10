import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

import TodoListInterface from "../../../../domain/src/lib/interfaces/todoList.interface";

@Injectable({
  providedIn: 'root'
})

export class TodosDataAccessService {

  constructor() { }

  syncTodosWithLocalStorage(todos):void {
    const json = JSON.stringify(todos);
    localStorage.setItem('todos',  json);
  }

  loadTodosFromLocalStorage():Observable<TodoListInterface> {
    const todosList:string = localStorage.getItem('todos');

    let todos: TodoListInterface;

    if(this.isJson(todosList)  ) {
      todos = JSON.parse(
        localStorage.getItem('todos')
      );
    } else {
      todos = {
        finished: {
          ids: [],
          entities: {}
        },
        active: {
          ids: [],
          entities: {}
        },
        selected: null
      }
    }

    return of(todos);
  }

  isJson(str):boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

}
