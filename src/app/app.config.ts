import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {  provideHttpClient } from '@angular/common/http';
import { Env } from './env';
import { VideoRunnerPipe } from './pipes/video-runner.pipe';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),Env,VideoRunnerPipe]
 };
