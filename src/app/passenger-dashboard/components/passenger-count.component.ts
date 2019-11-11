import { Component, Input } from "@angular/core";
import { IPassenger } from "../interfaces/passenger.interface";

@Component({
  selector: "passenger-count",
  template: `
    <div>
      Airline Passengers
      <div>
        Total checked in passengers: {{ checkedIPassengers() }}/{{
          items?.length || 0
        }}
      </div>
    </div>
  `
})
export class PassengerCountComponent {
  @Input()
  items: IPassenger[];

  checkedIPassengers() {
    if (!this.items || !this.items.length) return 0;
    return this.items.filter((passenger: IPassenger) => {
      return passenger.checkedIn;
    }).length;
  }
}
