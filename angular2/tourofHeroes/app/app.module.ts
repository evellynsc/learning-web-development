import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//You compose Angular applications into closely related blocks of functionality with NgModules.
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
//Every Angular application has at least one module: the root module, named AppModule here.
export class AppModule { }
