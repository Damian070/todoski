import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild, ElementRef
} from '@angular/core';
import {Todo} from "../../../../../domain/src/lib/interfaces/todo.interface";

@Component({
  selector: 'todo-add-edit-form',
  templateUrl: './todo-add-edit-form.component.html',
  styleUrls: ['./todo-add-edit-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TodoAddEditFormComponent {
  @ViewChild('taskDescriptionInput', {static: false}) taskDescriptionInput: ElementRef;

  get addingMode():boolean {
    return !this.selectedTodo;
  }

  get taskDescription(): String {
    return this.selectedTodo ? this.selectedTodo.goal : '';
  }

  @Input() selectedTodo: Todo | null ;

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() cancelTodoSelection: EventEmitter<void> = new EventEmitter();
  @Output() editTodo: EventEmitter<any> = new EventEmitter();

  add(e):void {
    const id = Date.now();
    e.length < 1 || this.addTodo.emit({id, goal: e});
  }

  handleSubmit():void {
    const  {value } = this.taskDescriptionInput.nativeElement;

    const { addingMode, editTodo } = this;
    addingMode ? this.add(value) : editTodo.emit({goal: value, id: this.selectedTodo.id});
  }
}
