import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared.module';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/public/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/public/login' },

];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PublicModule { }
