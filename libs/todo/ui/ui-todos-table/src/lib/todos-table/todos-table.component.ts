import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Todo } from '../../../../../domain/src/lib/interfaces/todo.interface';
import { MatDialog } from '@angular/material/dialog';
import { UiConfirmationDialogComponent } from '../../../../../../shared/ui-confirmation-dialog/src/lib/ui-confirmation-dialog/ui-confirmation-dialog.component';
import { filter } from 'rxjs/operators';

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

  constructor(private dialog: MatDialog) {}

  confirmAction(deleteFlag: boolean, todo: Todo): void {
    const dialogRef = this.dialog.open(UiConfirmationDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(filter(res => !!res))
      .subscribe(res =>
        deleteFlag
          ? this.deleteTodo.emit(todo.id)
          : this.setTodoBackToPending.emit(todo)
      );
  }

  finish(e: Todo): void {
    this.setTodoAsFinished.emit(e);
  }

  select(e: Todo): void {
    this.selectForEdition.emit(e);
  }
}
