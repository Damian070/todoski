import { readFirst } from '@nrwl/angular/testing';
import { TestBed } from '@angular/core/testing';

import { createSpyObj } from 'jest-createspyobj';

import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { TodosEffects } from './todos.effects';
import { TodosFacade } from './todos.facade';

import { TodoStateInterface } from '@todo/todo/domain';

import { fromTodosActions, TODOS_FEATURE_KEY } from '@todo/todo/data-access';
import { initialState, reducer } from './todos.reducer';

describe('Todos facade', () => {
  let facade: TodosFacade;
  let store: Store<TodoStateInterface>;

  beforeEach(() => {
    @NgModule({
      imports: [
        StoreModule.forFeature(TODOS_FEATURE_KEY, reducer, { initialState }),
        EffectsModule.forFeature([TodosEffects])
      ],
      providers: [TodosFacade]
    })
    class TodosFeatureModule {}

    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        TodosFeatureModule
      ]
    });

    store = TestBed.get(Store);
    facade = TestBed.get(TodosFacade);
    jest.spyOn(store, 'dispatch');
  });

  it('should be defined', () => {
    expect(store).toBeTruthy();
    expect(facade).toBeTruthy();
  });

  it('should load an empty list of todos', async done => {
    try {
      let todosActiveList = await readFirst(facade.active$);
      let todosFinishedList = await readFirst(facade.finished$);
      let selectedTodo = await readFirst(facade.selected$);

      expect(todosFinishedList.length).toBe(0);
      expect(todosActiveList.length).toBe(0);
      expect(selectedTodo).toBe(null);

      done();
    } catch (err) {
      done.fail(err);
    }
  });

  it('should dispatch addTodoAction', () => {
    const action = new fromTodosActions.AddTodo({ id: 3, goal: 'test' });

    facade.addTodo(action.payload);
    expect(store.dispatch).toHaveBeenCalled();
  });
});
