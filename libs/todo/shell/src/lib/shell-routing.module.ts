import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoContainerComponent } from './containers/todo-container/todo-container.component';

const routes: Routes = [
  {
    path: '',
    component: TodoContainerComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@todo/todo/feature').then(m => m.TodoFeatureModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule {}
