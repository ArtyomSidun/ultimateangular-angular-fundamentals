import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../passenger-dashboard.service";
import { IPassenger } from "../interfaces/passenger.interface";
import { Router } from "@angular/router";

@Component({
  selector: "passenger-dashboard",
  templateUrl: "./passenger-dashboard.component.html",
  styleUrls: ["./passenger-dashboard.component.scss"]
})
export class PassengerDashboardComponent implements OnInit {
  title = "ultimateangular-angular-fundamentals";
  passengers: IPassenger[];

  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router
  ) {}

  ngOnInit() {
    this.passengerService.getPassengers().subscribe((data: IPassenger[]) => {
      this.passengers = data;
    });
  }

  handelEdit(event: IPassenger) {
    this.passengerService.updatePassenger(event).subscribe(
      (data: IPassenger) => {
        this.passengers = this.passengers.filter((passenger: IPassenger) => {
          if (passenger.id === data.id) {
            passenger = Object.assign(passenger, data);
          }
          return passenger;
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  handelRemove(event: IPassenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: IPassenger) => {
        this.passengers = this.passengers.filter((passenger: IPassenger) => {
          return passenger.id !== data.id;
        });
      });
  }

  handelView(event: IPassenger) {
    this.router.navigate(["/passengers", event.id]);
  }
}
