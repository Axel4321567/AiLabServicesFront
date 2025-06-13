import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(HttpClientModule),
    ...(appConfig.providers ?? [])
  ]
})
  .catch((err) => console.error(err));
