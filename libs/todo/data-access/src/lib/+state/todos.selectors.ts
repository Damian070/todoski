import {createFeatureSelector, createSelector} from '@ngrx/store';
import { TODOS_FEATURE_KEY, TodosState, selectArray } from './todos.reducer';

const getTodosState = createFeatureSelector<TodosState>(TODOS_FEATURE_KEY);

const getActive = createSelector(
  getTodosState,
  (state: TodosState) => state.active
);

const getFinished = createSelector(
  getTodosState,
  (state: TodosState) => state.finished
);

const getSelected = createSelector(
  getTodosState,
  (state: TodosState) => state.selected
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
