import { Injectable } from '@angular/core';
import {of} from "rxjs";

import TodoListInterface from "../../../../domain/src/lib/interfaces/todoList.interface";
import {TODOS_FEATURE_KEY, TodosPartialState} from "@todo/todo/data-access";

@Injectable({
  providedIn: 'root'
})

export class TodosDataAccessService {

  constructor() { }

  syncTodosWithLocalStorage(todos) {
    const json = JSON.stringify(todos);
    localStorage.setItem('todos',  json);
    // localStorage.setItem('todos',  '');
  }

  loadTodosFromLocalStorage() {
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

  isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

}
