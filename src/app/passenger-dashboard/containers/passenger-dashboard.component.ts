import { Component, OnInit } from "@angular/core";
import { IPassenger } from "../interfaces/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  templateUrl: "./passenger-dashboard.component.html",
  styleUrls: ["./passenger-dashboard.component.scss"]
})
export class PassengerDashboardComponent implements OnInit {
  title = "ultimateangular-angular-fundamentals";
  passengers: IPassenger[];

  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: "Stephen",
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      },
      {
        id: 2,
        fullname: "Roon",
        checkedIn: true,
        checkInDate: 1490742000000,
        children: [
          {
            name: "Taras",
            age: 38
          },
          {
            name: "Bobic",
            age: 97
          }
        ]
      },
      {
        id: 3,
        fullname: "Thomas",
        checkedIn: false,
        checkInDate: 1490742000000,
        children: null
      },
      {
        id: 4,
        fullname: "Diego",
        checkedIn: false,
        checkInDate: null,
        children: [
          {
            name: "Dony",
            age: 7
          }
        ]
      },
      {
        id: 4,
        fullname: "Dodo",
        checkedIn: true,
        checkInDate: null,
        children: null
      }
    ];
  }

  handelEdit(event) {
    console.log(event);
  }

  handelRemove(event) {
    console.log(event);
  }
}
