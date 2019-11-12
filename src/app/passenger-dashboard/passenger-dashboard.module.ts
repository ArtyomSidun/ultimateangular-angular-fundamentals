import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

//containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard.component";
import { PassengerViwerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
//components
import { PassengerCountComponent } from "./components/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail.component";

//services
import { PassengerDashboardService } from './passenger-dashboard.service'

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViwerComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [PassengerDashboardComponent, PassengerViwerComponent],
  providers: [PassengerDashboardService],
  bootstrap: []
})
export class PassengerDashboardModule { }
