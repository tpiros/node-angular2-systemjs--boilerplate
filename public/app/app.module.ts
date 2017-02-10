import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationComponent } from './components/application/application.component';
import { WelcomePageComponent } from  './components/welcome-page/welcome-page.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    ApplicationComponent,
    WelcomePageComponent
  ],
  bootstrap: [
    ApplicationComponent
  ]
})

export class AppModule { }