import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,  ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from '@angular/material/button';

import {TodoAddEditFormComponent} from "./todo-add-edit-form/todo-add-edit-form.component";

@NgModule({
  imports: [CommonModule, MatFormFieldModule,FormsModule,  ReactiveFormsModule, MatInputModule, MatButtonModule],
  declarations: [TodoAddEditFormComponent],
  exports: [TodoAddEditFormComponent]
})

export class TodoSharedUiAddEditTodoFormModule {}
