import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {Todo} from '../../../../../domain/src/lib/interfaces/todo.interface';
import {MatDialog} from "@angular/material/dialog";
import {UiDialogComponent} from "../../../../ui-dialog/src/lib/ui-dialog/ui-dialog.component";

@Component({
  selector: 'todo-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosTableComponent {
  todoToPerformActionOn: Todo;
  deleteFlag: boolean;
  @Input() activeTodos: Todo[];
  @Input() finishedTodos: Todo[];

  @Output() setTodoAsFinished: EventEmitter<Todo> = new EventEmitter();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter();
  @Output() selectForEdition: EventEmitter<Todo> = new EventEmitter();
  @Output() setTodoBackToPending: EventEmitter<Todo> = new EventEmitter();

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UiDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      if(res) this.deleteFlag ? this.deleteTodo.emit(this.todoToPerformActionOn.id) : this.setTodoBackToPending.emit(this.todoToPerformActionOn);
    });
  }

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
