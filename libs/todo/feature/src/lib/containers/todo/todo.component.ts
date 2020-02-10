import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {Todo} from "../../../../../domain/src/lib/interfaces/todo.interface";
import {TodosFacade} from '../../../../../data-access/src/lib/+state/todos.facade';
import {fromTodosActions} from "@todo/todo/data-access";

@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  activeTodos$: Observable<Todo[]> = this.facade.active$ ;
  finishedTodos$: Observable<Todo[]> = this.facade.finished$ ;
  selectedTodo$: Observable<Todo | null> = this.facade.selected$;

  constructor(private facade: TodosFacade) { }

  addTodo(todo: Todo):void {
    this.facade.addTodo(todo);
  }
  editTodo(todo: Partial<Todo>):void {
    this.facade.editTodo(todo);
  }
  deleteTodo(id: number):void {
    this.facade.deleteTodo(id);
  }
  selectTodo(todo: Todo):void {
    this.facade.selectTodo(todo);
  }
  cancelTodoSelection():void {
    this.facade.cancelTodoSelection();
  }
  setTodoAsFinished(todo: Todo):void {
    this.facade.setTodoAsFinished(todo);
  }

  ngOnInit(): void {
    this.facade.getPersistedTodos();
  }

}
