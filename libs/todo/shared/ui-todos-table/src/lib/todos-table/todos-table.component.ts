import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../../../../domain/src/lib/interfaces/todo.interface";

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

  finish(e) {
    this.setTodoAsFinished.emit(e);
  }

  delete(e) {
    this.deleteTodo.emit(e);
  }

  select(e) {
    this.selectForEdition.emit(e);
  }

  prevDefault(e) {
    e.preventDefault()
  }
}
