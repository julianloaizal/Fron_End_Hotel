import {RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
