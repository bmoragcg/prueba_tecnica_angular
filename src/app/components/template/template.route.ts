import { Routes } from '@angular/router';

export const SIDEBAR_ROUTES: Routes = [
  {
    path: 'comida-tipica',
    loadChildren: () =>
      import(
        'src/app/components/private/comida-tipica/comida-tipica.module'
      ).then((m) => m.ComidaTipicaModule),
  },
  // { path: '', redirectTo: '/administrativo' },
  // { path: '**', redirectTo: '/Public/Not-Found' }
];