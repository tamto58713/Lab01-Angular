import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise01Component } from './exercise01/exercise01.component';
import { Exercise02Component } from './exercise02/exercise02.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise01Component,
    Exercise02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
