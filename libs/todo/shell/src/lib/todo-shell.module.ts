import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoContainerComponent} from "./containers/todo-container/todo-container.component";

import {UiHeaderModule} from "../../../../shared/ui-header/src";
import {ShellRoutingModule} from "./shell-routing.module";
import {TodoFeatureModule} from "@todo/todo/feature";
import {UiTodosTableModule} from "../../../../shared/ui-todos-table/src";

@NgModule({
  imports: [CommonModule, UiHeaderModule, ShellRoutingModule, TodoFeatureModule, UiTodosTableModule],
  declarations: [TodoContainerComponent]
})

export class TodoShellModule {}
