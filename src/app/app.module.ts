import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestingRXJSModule } from './testing-rxjs/testing-rxjs.module';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    TestingRXJSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
