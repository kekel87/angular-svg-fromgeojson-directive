import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FromGeojsonDirective } from './from-geojson.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule  ],
  declarations: [ AppComponent, HelloComponent, FromGeojsonDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
