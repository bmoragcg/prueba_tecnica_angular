import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeCOLExtra from '@angular/common/locales/extra/es-CO';
import localeCOL from '@angular/common/locales/es-CO';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RestInterceptor } from './interceptors/rest.interceptor';
import { SharedModule } from './components/shared.module';


registerLocaleData(localeCOL, 'es-CO', localeCOLExtra);


const DECLARATIONS = [AppComponent];
const PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: RestInterceptor, multi: true },
  { provide: DEFAULT_CURRENCY_CODE, useValue: 'COP' },
  { provide: LOCALE_ID, useValue: 'es-CO' },
];

const IMPORTMODULES = [AppRoutingModule, BrowserModule, SharedModule];

@NgModule({
  declarations: [DECLARATIONS],
  bootstrap: [AppComponent],
  providers: [...PROVIDERS],
  imports: [IMPORTMODULES],
  exports: [DECLARATIONS],
})
export class AppModule { }
