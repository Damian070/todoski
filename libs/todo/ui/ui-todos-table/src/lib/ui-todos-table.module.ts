import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { TodosTableComponent } from './todos-table/todos-table.component';
import {UiDialogModule} from "@todo/shared/ui-dialog";

@NgModule({
  imports: [CommonModule, MatCheckboxModule, MatButtonModule, UiDialogModule],
  declarations: [TodosTableComponent],
  exports: [TodosTableComponent]
})
export class UiTodosTableModule {}
