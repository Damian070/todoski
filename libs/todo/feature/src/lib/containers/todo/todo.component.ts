import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {Todo} from "../../../../../domain/src/lib/interfaces/todo.interface";
import {TodosFacade} from '../../../../../data-access/src/lib/+state/todos.facade';

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

  constructor(public facade: TodosFacade) { }

  ngOnInit(): void {
    this.facade.getPersistedTodos();
  }

}
