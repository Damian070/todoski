import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDialogComponent } from './ui-dialog/ui-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [UiDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [UiDialogComponent]
})
export class UiDialogModule {}
