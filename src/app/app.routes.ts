import {RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { BodyComponent } from './components/body/body.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: BodyComponent},
    { path: 'reservacion', component: ReservacionComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
