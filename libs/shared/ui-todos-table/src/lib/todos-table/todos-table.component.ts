import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../../../../todo/domain/src/lib/interfaces/todo.interface";

@Component({
  selector: 'todo-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosTableComponent {
  @Input()  activeTodos: Todo[];
  @Input()  finishedTodos: Todo[];

  @Output() setTodoAsFinished: EventEmitter<Todo> = new EventEmitter();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter();
  @Output() selectForEdition: EventEmitter<Todo> = new EventEmitter();

  finish(e):void {
    this.setTodoAsFinished.emit(e);
  }

  delete(e):void {
    this.deleteTodo.emit(e);
  }

  select(e):void {
    this.selectForEdition.emit(e);
  }
}
