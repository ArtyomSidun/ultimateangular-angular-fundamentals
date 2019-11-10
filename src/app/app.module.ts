import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    //angular
    BrowserModule,
    AppRoutingModule,
    //project
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
