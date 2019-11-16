import { Component } from "@angular/core";
import { INav } from "./passenger-dashboard/interfaces/nav.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  nav: INav[] = [
    {
      link: "/",
      name: "Home",
      exact: true
    },
    {
      link: "/passengers",
      name: "Passengers",
      exact: false
    }
  ];
}
