import {NgModule} from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { LoginComponent } from 'app/login/login.component';
import { Component } from '@angular/core/src/metadata/directives';
import { HomeComponent } from 'app/home/home.component';
import { AbTestingComponent } from 'app/abtesting/abtesting.component';

export const routing = RouterModule.forRoot([
    {path: "" , component: HomeComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'abtesting' , component: AbTestingComponent}
    
]);