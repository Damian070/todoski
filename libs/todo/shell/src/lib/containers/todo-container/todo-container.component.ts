import { Component, HostListener, OnInit } from '@angular/core';
import { pluck, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { TodosDataAccessService } from '../../../../../data-access/src/lib/services/todos-data-access.service';
import { TodosPartialState } from '@todo/todo/data-access';

@Component({
  selector: 'todo-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {
  @HostListener('window:unload', ['$event'])
  unloadHandler(event): void {
    this.saveToDP();
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event): null {
    return null;
  }

  saveToDP(): void {
    this.store$
      .pipe(
        take(1),
        pluck('todos')
      )
      .subscribe(state =>
        this.dataAccessService.syncTodosWithLocalStorage(state)
      );
  }

  constructor(
    private dataAccessService: TodosDataAccessService,
    private store$: Store<TodosPartialState>
  ) {}
}
