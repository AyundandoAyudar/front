import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormBuilderComponent, FormInputComponent],
  exports: [FormBuilderComponent, FormInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class FormModule {}
// TODO:
/**
 * Text
 * Date
 * DropDown
 */
