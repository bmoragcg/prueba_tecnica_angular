import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'public', loadChildren: () => import('./components/public/public.module').then((m) => m.PublicModule) },
  { path: 'private', loadChildren: () => import('./components/private/private.module').then((m) => m.PrivateModule) },
  {path: '**', redirectTo: '/public/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
