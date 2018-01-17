import {NgModule} from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { LoginComponent } from 'app/login.component';
import { Component } from '@angular/core/src/metadata/directives';
import { HomeComponent } from 'app/home.componenet';

export const routing = RouterModule.forRoot([
    {path: "" , component: HomeComponent},
    {path: 'login' , component: LoginComponent}
    
]);