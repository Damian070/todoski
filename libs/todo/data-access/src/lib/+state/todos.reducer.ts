import {TodosAction, TodosActionTypes} from './todos.actions';
import {EntityState, createEntityAdapter} from '@ngrx/entity'

import {Todo} from "../../../../domain/src/lib/interfaces/todo.interface";

export const TODOS_FEATURE_KEY = 'todos';

const compare = (toDo: Todo) => {
  return toDo.id;
};
export const  todoAdapter = createEntityAdapter<Todo>({
  selectId: compare
});
export interface TodosEntitiesState extends EntityState<Todo> {}

export  interface TodosState {
  finished: TodosEntitiesState,
  active: TodosEntitiesState,
  selected: Todo | null
}

export interface Todo {
  id: number,
  goal: string
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
  action: TodosAction
): TodosState {


  switch (action.type) {

    case TodosActionTypes.DeleteTodo: {

      state = {
        ...state,
        active: todoAdapter.removeOne(action.payload, state.active)
      };

      break;
    }

    case TodosActionTypes.EditTodo: {

      state = {
        ...state,
        active: todoAdapter.updateOne({ id: action.payload.id, changes: action.payload } , state.active),
        selected: null
      };

      break;
    }

    case TodosActionTypes.CancelTodoSelection: {

      state = {
        ...state,
        selected: null
      };

      break;
    }

    case TodosActionTypes.SelectTodo: {

      state = {
        ...state,
        selected: action.payload
      };

      break;
    }

    case TodosActionTypes.FinishTodo: {
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

    case TodosActionTypes.AddTodo: {

      state = {
        ...state,
        active: todoAdapter.addOne(action.payload, state.active)
      };

      break;
    }

    case TodosActionTypes.UpdateTodosFromDP: {

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
