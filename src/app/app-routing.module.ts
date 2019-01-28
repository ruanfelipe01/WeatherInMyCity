import { CurrentComponent } from './current/current.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResolveLocationService } from './resolve-location.service';

//const WEATHER_ROUTER: Routes = [{ path: '', component: CurrentComponent, resolve: { myWeather:ResolveLocationService} }];

const routes: Routes = [
  { path: '', component: CurrentComponent, resolve: { myWeather:ResolveLocationService} }
];
/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/

export const AppRoutingModule:ModuleWithProviders = RouterModule.forRoot(routes);
//export class AppRoutingModule { }
