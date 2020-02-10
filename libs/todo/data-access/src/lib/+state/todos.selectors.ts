import {createFeatureSelector, createSelector} from '@ngrx/store';
import { TODOS_FEATURE_KEY, selectArray } from './todos.reducer';
import { TodoStateInterface }from '@todo/todo/domain'

const getTodosState = createFeatureSelector<TodoStateInterface >(TODOS_FEATURE_KEY);

const getActive = createSelector(
  getTodosState,
  (state: TodoStateInterface ) => state.active
);

const getFinished = createSelector(
  getTodosState,
  (state: TodoStateInterface ) => state.finished
);

const getSelected = createSelector(
  getTodosState,
  (state: TodoStateInterface ) => state.selected
);

const getActiveArray = createSelector(
  getActive,
  selectArray
);

const getFinishedArray = createSelector(
  getFinished,
  selectArray
);

export const todosQuery = {
  getActiveArray,
  getSelected,
  getFinishedArray
};
