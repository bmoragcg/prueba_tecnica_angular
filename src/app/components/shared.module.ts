import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TemplateComponent } from './template/template.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MODULES = [
  ReactiveFormsModule,
  HttpClientModule,
  FormsModule,
  RouterModule
];

const IMPORTMODULES = [CommonModule];

const DECLARATIONS = [TemplateComponent];


@NgModule({
  imports: [IMPORTMODULES, MODULES],
  exports: [DECLARATIONS, MODULES],
  declarations: [DECLARATIONS],
})
export class SharedModule { }
