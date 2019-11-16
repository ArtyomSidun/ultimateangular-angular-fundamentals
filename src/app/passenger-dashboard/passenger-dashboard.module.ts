import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Route, RouterModule, Routes } from "@angular/router";
//containers
import { PassengerDashboardComponent } from "./containers/passenger-dashboard.component";
import { PassengerViwerComponent } from "./containers/passenger-viewer/passenger-viewer.component";

//components
import { PassengerCountComponent } from "./components/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

//services
import { PassengerDashboardService } from "./passenger-dashboard.service";

const routes: Routes = [
  {
    path: "passengers",
    children: [
      { path: "", component: PassengerDashboardComponent, pathMatch: "full" },
      { path: ":id", component: PassengerViwerComponent }
    ]
  }
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViwerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [PassengerDashboardService],
  bootstrap: []
})
export class PassengerDashboardModule {}
