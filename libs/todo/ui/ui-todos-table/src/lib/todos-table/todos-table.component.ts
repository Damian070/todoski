import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Todo } from '../../../../../domain/src/lib/interfaces/todo.interface';

@Component({
  selector: 'todo-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosTableComponent {
  @Input() activeTodos: Todo[];
  @Input() finishedTodos: Todo[];

  @Output() setTodoAsFinished: EventEmitter<Todo> = new EventEmitter();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter();
  @Output() selectForEdition: EventEmitter<Todo> = new EventEmitter();
  @Output() setTodoBackToPending: EventEmitter<Todo> = new EventEmitter();

  finish(e: Todo): void {
    this.setTodoAsFinished.emit(e);
  }

  backToPending(e: Todo): void {
    confirm('Are you sure?') && this.setTodoBackToPending.emit(e);
  }

  delete(e: number): void {
    confirm('Are you sure?') && this.deleteTodo.emit(e);
  }

  select(e: Todo): void {
    this.selectForEdition.emit(e);
  }
}
