import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard.component";

import { PassengerCountComponent } from "./components/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail.component";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [BrowserModule],
  exports: [PassengerDashboardComponent],
  providers: [],
  bootstrap: []
})
export class PassengerDashboardModule {}
