import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TodoStateInterface } from '@todo/todo/domain';

@Injectable({
  providedIn: 'root'
})
export class TodosDataAccessService {
  constructor() {}

  syncTodosWithLocalStorage(todos): void {
    const json = JSON.stringify(todos);
    localStorage.setItem('todos', json);
  }

  loadTodosFromLocalStorage(): Observable<TodoStateInterface | null> {
    const todosList: string = localStorage.getItem('todos');

    let todos: TodoStateInterface;

    if (this.isJson(todosList)) {
      todos = JSON.parse(todosList);
    } else return of(null);

    return of(todos);
  }

  isJson(str): boolean {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
}
