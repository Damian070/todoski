import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Todo } from '@todo/todo/domain';

@Component({
  selector: 'todo-add-edit-form',
  templateUrl: './todo-add-edit-form.component.html',
  styleUrls: ['./todo-add-edit-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoAddEditFormComponent {
  todoForm;
  editedTodoValue: Todo | null;

  @Input()
  set selectedTodo(value: Todo | null) {
    this.editedTodoValue=  value;
    this.todoForm.controls.taskDescription.setValue( value && value.goal || '');
  }

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() cancelTodoSelection: EventEmitter<void> = new EventEmitter();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      taskDescription: ['', Validators.required]
    });
  }

  cancelTodoSelectionLocal():void {
    this.cancelTodoSelection.emit();
  }

  add(e: string): void {
    const id = Date.now();
    this.addTodo.emit({ id, goal: e });
  }

  handleSubmit(): void {
    const { value } = this.todoForm.controls.taskDescription;

    !this.editedTodoValue
      ? value.length > 0 && this.add(value)
      : this.editTodo.emit({ goal: value, id: this.editedTodoValue.id });
  }
}
