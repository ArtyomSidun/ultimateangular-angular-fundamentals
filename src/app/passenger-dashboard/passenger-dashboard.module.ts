import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

//components
import { PassengerDashboardComponent } from "./containers/passenger-dashboard.component";
import { PassengerCountComponent } from "./components/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail.component";

//services
import { PassengerDashboardService } from './passenger-dashboard.service'

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  exports: [PassengerDashboardComponent],
  providers: [PassengerDashboardService],
  bootstrap: []
})
export class PassengerDashboardModule { }
