import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../../../../../domain/src/lib/interfaces/todo.interface';
import { TodosFacade } from '../../../../../data-access/src/lib/+state/todos.facade';
import { fromTodosActions } from '@todo/todo/data-access';

@Component({
  selector: 'todo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  activeTodos$: Observable<Todo[]> = this.facade.active$;
  finishedTodos$: Observable<Todo[]> = this.facade.finished$;
  selectedTodo$: Observable<Todo | null> = this.facade.selected$;

  constructor(private facade: TodosFacade) {}

  onAddTodo(todo: Todo): void {
    this.facade.addTodo(todo);
  }
  onEditTodo(todo: Partial<Todo>): void {
    this.facade.editTodo(todo);
  }
  onDeleteTodo(id: number): void {
    this.facade.deleteTodo(id);
  }
  onSelectTodo(todo: Todo): void {
    this.facade.selectTodo(todo);
  }
  onCancelTodoSelection(): void {
    this.facade.cancelTodoSelection();
  }
  onSetTodoAsFinished(todo: Todo): void {
    this.facade.setTodoAsFinished(todo);
  }
  onSetTodoBackToPending(todo: Todo): void {
    this.facade.setTodoBackToPending(todo);
  }

  ngOnInit(): void {
    this.facade.getPersistedTodos();
  }
}
