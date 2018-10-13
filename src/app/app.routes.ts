import {RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { BodyComponent } from './components/body/body.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: BodyComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
