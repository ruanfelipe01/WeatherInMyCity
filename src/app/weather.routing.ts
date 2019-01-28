import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CurrentComponent } from './current/current.component';
import { ResolveLocationService } from './resolve-location.service';

const WEATHER_ROUTER: Routes = [
    { path: '', component: CurrentComponent, resolve: { myWeather:ResolveLocationService} }
];

export const weatherRouting:ModuleWithProviders = RouterModule.forRoot(WEATHER_ROUTER);