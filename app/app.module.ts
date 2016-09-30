import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SplashComponent } from './splash/splash.component';

import { routing, appRoutingProviders }  from './app.routing';


@NgModule({
  imports: [ BrowserModule, routing, RouterModule ],
  declarations: [ AppComponent, ContactComponent, ProjectsComponent, SplashComponent ],
  providers: [
    appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }