import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SIDEBAR_ROUTES } from '../template/template.route';
import { TemplateComponent } from '../template/template.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared.module';

const routes: Routes = [
  { path: '', component: TemplateComponent, children: SIDEBAR_ROUTES },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PrivateModule { }
