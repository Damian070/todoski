import { Injectable } from '@angular/core';
import { Effect, Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {map, mergeMap, pluck, take} from 'rxjs/operators';

import { TodosPartialState } from './todos.reducer';
import { fromTodosActions } from './todos.actions';
import { TodosDataAccessService } from '../services/todos-data-access.service';

@Injectable()
export class TodosEffects {

  @Effect({dispatch: false})
  saveToDP$ = this.actions$.pipe(
    ofType(fromTodosActions.Types.AddTodo, fromTodosActions.Types.DeleteTodo, fromTodosActions.Types.EditTodo,
      fromTodosActions.Types.SetTodoBackToPending, fromTodosActions.Types.FinishTodo),
    map(action => {
    this.store.pipe(
      take(1),
      pluck('todos')
    ).subscribe(state => this.dataAccessService.syncTodosWithLocalStorage(state));
  }));

  @Effect()
  LoadFromDP$ = this.actions$.pipe(
    ofType(fromTodosActions.Types.LoadTodosFromLocalStorage),
    mergeMap(() =>
      this.dataAccessService
        .loadTodosFromLocalStorage()
        .pipe(map(todos => new fromTodosActions.UpdateTodosFromDP(todos)))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<TodosPartialState>,
    private dataAccessService: TodosDataAccessService
  ) {}
}
