import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './containers/todo/todo.component';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoDataAccessModule } from '@todo/todo/data-access';
import { UiTodosTableModule } from '../../../ui/ui-todos-table/src';
import { TodoSharedUiAddEditTodoFormModule } from '../../../ui/ui-add-edit-todo-form/src/lib/todo-shared-ui-add-edit-todo-form.module';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    TodoDataAccessModule,
    UiTodosTableModule,
    TodoSharedUiAddEditTodoFormModule
  ],
  declarations: [TodoComponent]
})
export class TodoFeatureModule {}
