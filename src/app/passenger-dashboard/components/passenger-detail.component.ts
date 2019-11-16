import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IPassenger } from "../interfaces/passenger.interface";

@Component({
  selector: "passenger-detail",
  styleUrls: ["./passenger-detail.component.scss"],
  template: `
    <div>
      <span
        class="status"
        [ngClass]="{ 'checked-in': detail.checkedIn }"
      ></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onChangeName(name.value)"
          #name
        />
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        {{
          detail.checkInDate
            ? (detail.checkInDate | date: "y MMMM d" | uppercase)
            : "Not checked in"
        }}
      </div>
      <button (click)="toggleEditing()">
        {{ editing ? "Done" : "Edit" }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
      <button (click)="goToPassenger()">
        View
      </button>
    </div>
  `
})
export class PassengerDetailComponent {
  @Input()
  detail: IPassenger;
  editing: boolean = false;
  @Output()
  edit: EventEmitter<IPassenger> = new EventEmitter<IPassenger>();
  @Output()
  remove: EventEmitter<IPassenger> = new EventEmitter<IPassenger>();
  @Output()
  view: EventEmitter<IPassenger> = new EventEmitter<IPassenger>();

  toggleEditing() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onChangeName(value: string) {
    this.detail.fullname = value;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }
}
