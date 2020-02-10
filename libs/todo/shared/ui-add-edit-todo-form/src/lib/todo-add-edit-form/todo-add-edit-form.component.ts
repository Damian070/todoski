import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild, ElementRef
} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {Todo} from "../../../../../domain/src/lib/interfaces/todo.interface";

@Component({
  selector: 'todo-add-edit-form',
  templateUrl: './todo-add-edit-form.component.html',
  styleUrls: ['./todo-add-edit-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoAddEditFormComponent {
  todoForm;

  @Input() selectedTodo: Todo | null ;

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() cancelTodoSelection: EventEmitter<void> = new EventEmitter();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      taskDescription: ['', Validators.required]
    });
  }

  prevDefault(e) {
    e.preventDefault();
  }

  add(e):void {
    const id = Date.now();
    this.addTodo.emit({id, goal: e});
  }

  handleSubmit():void {
    const  {value } = this.todoForm.controls.taskDescription;

    !this.selectedTodo ?  value.length > 0 && this.add(value) : this.editTodo.emit({goal: value, id: this.selectedTodo.id});
  }
}
