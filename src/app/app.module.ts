import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PassangerDashboardModule } from './passenger-dashboard/passanger-dashboard.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //angular
    BrowserModule,
    AppRoutingModule,
    //project
    PassangerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
