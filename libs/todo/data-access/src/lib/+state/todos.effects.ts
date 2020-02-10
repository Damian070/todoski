import {Injectable} from '@angular/core';
import {Effect, Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from "@ngrx/store";
import {map, mergeMap} from "rxjs/operators";

import {TodosPartialState} from './todos.reducer';
import {fromTodosActions} from './todos.actions'
import {TodosDataAccessService} from "../services/todos-data-access.service";

@Injectable()
export class TodosEffects {

  @Effect()
  LoadFromDP$ = this.actions$.pipe(
    ofType(fromTodosActions.Types.LoadTodosFromLocalStorage),
    mergeMap(() => this.dataAccessService.loadTodosFromLocalStorage()
      .pipe(
        map(todos => new  fromTodosActions.UpdateTodosFromDP(todos))
      ))
  );

  constructor(
    private actions$: Actions,
    private store: Store<TodosPartialState>,
    private dataAccessService: TodosDataAccessService
  ) {
  }
}
