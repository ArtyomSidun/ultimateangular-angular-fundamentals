import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPassenger } from "./interfaces/passenger.interface";
import { Observable } from "rxjs";

const PASSENGER_API = "http://localhost:3000/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<IPassenger[]> {
    return this.http.get<IPassenger[]>(PASSENGER_API);
  }

  getPassenger(id: number): Observable<IPassenger> {
    return this.http.get<IPassenger>(`${PASSENGER_API}/${id}`);
  }

  updatePassenger(passenger: IPassenger): Observable<IPassenger> {
    return this.http.put<IPassenger>(
      `${PASSENGER_API}/${passenger.id}`,
      passenger
    );
  }

  removePassenger(passenger: IPassenger): Observable<IPassenger> {
    return this.http.delete<IPassenger>(`${PASSENGER_API}/${passenger.id}`);
  }
}
