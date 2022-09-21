import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComidaTipicaComponent } from './comida-tipica/comida-tipica.component';

import { SIDEBAR_ROUTES } from '../template/template.route';
import { TemplateComponent } from '../template/template.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: TemplateComponent, children: SIDEBAR_ROUTES },
];

@NgModule({
  declarations: [
    ComidaTipicaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivateModule { }
