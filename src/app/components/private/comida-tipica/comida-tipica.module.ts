import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComidaTipicaComponent } from './comida-tipica.component';
import { SharedModule } from '../../shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [{ path: '', component: ComidaTipicaComponent }];

const COMPONENTS = [
  ComidaTipicaComponent,
];

const IMPORTS = [RouterModule.forChild(routes), CommonModule, SharedModule, NgbModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [IMPORTS]
})
export class ComidaTipicaModule { }
