import { Routes } from '@angular/router';
import { ComidaTipicaComponent } from '../private/comida-tipica/comida-tipica.component';

export const SIDEBAR_ROUTES: Routes = [
  {
    path: 'comida-tipica',
    component: ComidaTipicaComponent
    
  },
  // { path: '', redirectTo: '/administrativo' },
  // { path: '**', redirectTo: '/Public/Not-Found' }
];