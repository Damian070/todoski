import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { TodosTableComponent } from './todos-table/todos-table.component';
import { UiConfirmationDialogModule } from '@todo/shared/ui-confirmation-dialog';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule,
    UiConfirmationDialogModule
  ],
  declarations: [TodosTableComponent],
  exports: [TodosTableComponent]
})
export class UiTodosTableModule {}
