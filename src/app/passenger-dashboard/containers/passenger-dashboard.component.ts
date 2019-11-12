import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../passenger-dashboard.service";
import { IPassenger } from "../interfaces/passenger.interface";

@Component({
  selector: "passenger-dashboard",
  templateUrl: "./passenger-dashboard.component.html",
  styleUrls: ["./passenger-dashboard.component.scss"]
})
export class PassengerDashboardComponent implements OnInit {
  title = "ultimateangular-angular-fundamentals";
  passengers: IPassenger[];

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit () {
    this.passengerService.getPassengers().subscribe((data: IPassenger[]) => {
      this.passengers = data;
    });
  }

  handelEdit (event: IPassenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe(
        (data: IPassenger) => {
          console.log('*****************8')
          this.passengers = this.passengers.filter((passenger: IPassenger) => {
            if (passenger.id === data.id) {
              passenger = Object.assign(passenger, data);
            }
            return passenger;
          });
        },
        error => {
          console.log('*****************8')
          console.log(error)
        });
  }

  handelRemove (event: IPassenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: IPassenger) => {
        this.passengers = this.passengers.filter((passenger: IPassenger) => {
          return passenger.id !== data.id;
        });
      });
  }
}
