import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { fromTodosActions } from '@todo/todo/data-access';

import { TodosEffects } from './todos.effects';
import { TodosDataAccessService } from '../services/todos-data-access.service';

import { initialState } from '@todo/todo/data-access';
import { Todo, TodoStateInterface } from '@todo/todo/domain';

describe('TodosEffects', () => {
  let actions$: Observable<fromTodosActions.Types>;
  let effects: TodosEffects;
  let todosService: TodosDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        TodosEffects,
        provideMockActions(() => actions$),
        Store,
        {
          provide: TodosDataAccessService,
          useValue: {
            syncTodosWithLocalStorage: jest.fn(),
            loadTodosFromLocalStorage: jest.fn()
          }
        }
      ]
    });

    effects = TestBed.get(TodosEffects);
    todosService = TestBed.get(TodosDataAccessService);
  });

  it('effects should be defined', () => {
    expect(effects).toBeTruthy();
  });

  describe('Load Todos Effect', () => {
    it('Should return update todos action with todos payload', () => {
      const mockTodo: Todo = {
        id: 1,
        goal: 'test everything!'
      };
      const todos: TodoStateInterface = {
        ...initialState,
        active: { ids: [mockTodo.id], entities: { [mockTodo.id]: mockTodo } }
      };

      const action = new fromTodosActions.LoadTodosFromLocalStorage();
      const outcome = new fromTodosActions.UpdateTodosFromDP(todos);

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: todos });
      const expected = cold('--b', { b: outcome });
      todosService.loadTodosFromLocalStorage = jest.fn(() => response);

      expect(effects.LoadFromDP$).toBeObservable(expected);
    });
  });
});
