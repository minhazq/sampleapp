import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterOutletMap } from '@angular/router/src/router_outlet_map';
import { LoginComponent } from 'app/login/login.component';
import { routing } from 'app/app.routing';
import { HomeComponent } from 'app/home/home.component';
import { AbTestingComponent } from 'app/abtesting/abtesting.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AbTestingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
