import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IPassenger } from "../../interfaces/passenger.interface";
import { IBaggage } from "../../interfaces/baggage.interface";

@Component({
  selector: "passenger-form",
  templateUrl: "./passenger-form.component.html",
  styleUrls: ["./passenger-form.component.scss"]
})
export class PassengerFormComponent {
  @Input()
  detail: IPassenger;

  baggage: IBaggage[] = [
    {
      key: "none",
      value: "No baggage"
    },
    {
      key: "hand-only",
      value: "Hand baggage"
    },
    {
      key: "hold-only",
      value: "Hold baggage"
    },
    {
      key: "hand-hold",
      value: "Hand and hold baggage"
    }
  ];

  @Output()
  update: EventEmitter<IPassenger> = new EventEmitter<IPassenger>();

  toggleCheckIn($event: boolean) {
    if ($event) {
      this.detail.checkInDate = Date.now();
    }
  }

  handleSubmit(passenger: IPassenger, isValid: boolean) {
    if (isValid) {
      this.update.emit(passenger);
    }
  }
}
