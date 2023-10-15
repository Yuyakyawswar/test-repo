import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroupComponent } from './form-group/form-group.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    FormGroupComponent,
    ModalDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormGroupComponent,
    ModalDialogComponent
  ]
})
export class WidgetsModule { }
