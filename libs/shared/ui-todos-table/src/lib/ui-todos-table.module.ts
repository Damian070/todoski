import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from "@angular/material/button";

import { TodosTableComponent } from './todos-table/todos-table.component'

@NgModule({
  imports: [CommonModule, MatCheckboxModule, MatButtonModule],
  declarations: [TodosTableComponent],
  exports: [TodosTableComponent]
})
export class UiTodosTableModule {}
