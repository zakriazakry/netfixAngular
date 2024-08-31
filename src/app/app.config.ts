import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {  provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { NbThemeModule } from '@nebular/theme';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),importProvidersFrom(
    NgxEchartsModule.forRoot({ echarts }),
  ), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()]
 };
