import {fromTodosActions} from './todos.actions';
import {EntityState, createEntityAdapter} from '@ngrx/entity'

import {Todo} from '@todo/todo/domain'

export const TODOS_FEATURE_KEY = 'todos';

export const  todoAdapter = createEntityAdapter<Todo>();
export interface TodosEntitiesState extends EntityState<Todo> {}

export  interface TodosState {
  finished: TodosEntitiesState,
  active: TodosEntitiesState,
  selected: Todo | null
}

export interface TodosPartialState {
  readonly [TODOS_FEATURE_KEY]: TodosState;
}

export const initialState: TodosState = {
  finished: {
    ids: [],
    entities: {}
  },
  active: {
    ids: [],
    entities: {}
  },
  selected: null
};

export function reducer(
  state: TodosState = initialState,
  action: fromTodosActions.CollectiveType
): TodosState {


  switch (action.type) {

    case fromTodosActions.Types.DeleteTodo: {

      state = {
        ...state,
        active: todoAdapter.removeOne(action.payload, state.active),
        selected: state.selected && state.selected.id === action.payload ? null : state.selected
      };

      break;
    }

    case fromTodosActions.Types.EditTodo: {

      state = {
        ...state,
        active: todoAdapter.updateOne({ id: action.payload.id, changes: action.payload } , state.active),
        selected: null
      };

      break;
    }

    case fromTodosActions.Types.CancelTodoSelection: {

      state = {
        ...state,
        selected: null
      };

      break;
    }

    case fromTodosActions.Types.SelectTodo: {

      state = {
        ...state,
        selected: action.payload
      };

      break;
    }

    case fromTodosActions.Types.FinishTodo: {
      const {selected} = state;
      let removeSelected:boolean = false;
      if(selected && selected ===action.payload) removeSelected = true;

      state = {
        ...state,
        active: todoAdapter.removeOne(action.payload.id, state.active),
        finished: todoAdapter.addOne(action.payload, state.finished),
        selected: removeSelected ? null : selected
      };

      break;
    }

    case fromTodosActions.Types.AddTodo: {

      state = {
        ...state,
        active: todoAdapter.addOne(action.payload, state.active)
      };

      break;
    }

    case fromTodosActions.Types.UpdateTodosFromDP: {

      state = action.payload || initialState;

      break;
    }

  }
  return state;
}

const {
  selectAll
} = todoAdapter.getSelectors();

export const selectArray = selectAll;
