import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { IPassenger } from "../../interfaces/passenger.interface";
import { Router, ActivatedRoute, Routes } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "passenger-viewer",
  styleUrls: [],
  template: `
    <div>
      <button (click)="goBack()">
        &lsaquo; Go Back
      </button>
      <passenger-form
        [detail]="passenger"
        (update)="onPassengerUpdate($event)"
      ></passenger-form>
    </div>
  `
})
export class PassengerViwerComponent implements OnInit {
  passenger: IPassenger;
  constructor(
    private passengerService: PassengerDashboardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((data: IPassenger) =>
          this.passengerService.getPassenger(data.id)
        )
      )
      .subscribe((data: IPassenger) => {
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

  goBack() {
    this.router.navigate(["passengers"]);
  }
}
