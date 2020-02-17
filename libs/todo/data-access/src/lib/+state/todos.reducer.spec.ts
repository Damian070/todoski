import {
  fromTodosActions,
  initialState,
  reducer
} from '@todo/todo/data-access';
import { Todo } from '@todo/todo/domain';

describe('Todos Reducer', () => {
  const mockTodo: Todo = {
    id: 1,
    goal: 'test everything!'
  };

  describe('undefined action', () => {
    it('should return default state', () => {
      const action = { type: 'NOOP' } as any;
      const result = reducer(undefined, action);

      expect(result).toBe(initialState);
    });
  });

  describe(fromTodosActions.Types.EditTodo, () => {
    it('should update todo and deselect it', () => {
      const modifiedMockTodo = { ...mockTodo, goal: 'TEST EVERYTHING!' };
      const action = new fromTodosActions.EditTodo(modifiedMockTodo);
      const EditInitialState = {
        ...initialState,
        active: { ids: [mockTodo.id], entities: { [mockTodo.id]: mockTodo } },
        selected: mockTodo
      };
      const result = reducer(EditInitialState, action);

      expect(result).toEqual({
        ...initialState,
        selected: null,
        active: {
          ids: [1],
          entities: { [modifiedMockTodo.id]: modifiedMockTodo }
        }
      });
    });
  });

  describe(fromTodosActions.Types.FinishTodo, () => {
    it('should relocate affected todo from active to finished and unset it from selected property in case its targeted for edition', () => {
      const action = new fromTodosActions.FinishTodo(mockTodo);
      const FinishInitialState = {
        ...initialState,
        active: { ids: [mockTodo.id], entities: { [mockTodo.id]: mockTodo } },
        selected: mockTodo
      };
      const result = reducer(FinishInitialState, action);

      expect(result).toEqual({
        ...initialState,
        finished: { ids: [mockTodo.id], entities: { [mockTodo.id]: mockTodo } },
        selected: null
      });
    });
  });

  describe(fromTodosActions.Types.AddTodo, () => {
    it('should add todo', () => {
      const action = new fromTodosActions.AddTodo(mockTodo);
      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        active: { ids: [mockTodo.id], entities: { [mockTodo.id]: mockTodo } }
      });
    });
  });

  describe(fromTodosActions.Types.SetTodoBackToPending, () => {
    it('should move todo from finished to active', () => {
      const action = new fromTodosActions.SetTodoBackToPending(mockTodo);
      const result = reducer(
        {
          ...initialState,
          finished: {
            ids: [mockTodo.id],
            entities: { [mockTodo.id]: mockTodo }
          }
        },
        action
      );

      expect(result).toEqual({
        ...initialState,
        active: { ids: [mockTodo.id], entities: { [mockTodo.id]: mockTodo } }
      });
    });
  });

  describe(fromTodosActions.Types.SelectTodo, () => {
    it('should mark todo as selected', () => {
      const action = new fromTodosActions.SelectTodo(mockTodo);
      const result = reducer(initialState, action);

      expect(result).toEqual({ ...initialState, selected: mockTodo });
    });
  });

  describe(fromTodosActions.Types.CancelTodoSelection, () => {
    it('should set selected to null', () => {
      const action = new fromTodosActions.CancelTodoSelection();
      const result = reducer({ ...initialState, selected: mockTodo }, action);

      expect(result).toEqual(initialState);
    });
  });

  describe(fromTodosActions.Types.DeleteTodo, () => {
    it('self-explanatory', () => {
      const action = new fromTodosActions.DeleteTodo(mockTodo.id);
      const result = reducer(
        {
          ...initialState,
          active: { ids: [mockTodo.id], entities: { [mockTodo.id]: mockTodo } }
        },
        action
      );

      expect(result).toEqual(initialState);
    });
  });
});
