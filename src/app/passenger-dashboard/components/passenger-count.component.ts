import { Component, Input } from "@angular/core";
import { IPassenger } from "../interfaces/passenger.interface";

@Component({
  selector: "passenger-count",
  template: `
    <div>
      Airline Passengers
      <div>
        Total checked in passengers: {{ checkedIPassengers() }}/{{
          items.length
        }}
      </div>
    </div>
  `
})
export class PassengerCountComponent {
  @Input()
  items: IPassenger[];

  checkedIPassengers() {
    if (!this.items.length) return;
    return this.items.filter((passenger: IPassenger) => {
      return passenger.checkedIn;
    }).length;
  }
}
