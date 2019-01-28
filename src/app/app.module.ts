import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherService } from './weather.service';
import { ResolveLocationService } from './resolve-location.service';
import { weatherRouting } from './weather.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    weatherRouting
  ],
  providers: [
    WeatherService, 
    ResolveLocationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
