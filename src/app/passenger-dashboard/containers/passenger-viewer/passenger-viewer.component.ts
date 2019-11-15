import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { IPassenger } from "../../interfaces/passenger.interface";

@Component({
  selector: "passenger-viewer",
  styleUrls: [],
  template: `
    <div>
      <passenger-form
        [detail]="passenger"
        (update)="onPassengerUpdate($event)"
      ></passenger-form>
    </div>
  `
})
export class PassengerViwerComponent implements OnInit {
  passenger: IPassenger;
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerService.getPassenger("1").subscribe((data: IPassenger) => {
      this.passenger = data;
    });
  }
  onPassengerUpdate(event: IPassenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: IPassenger) => {
        this.passenger = Object.assign({}, data);
      });
  }
}
