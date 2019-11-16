import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  styleUrls: [],
  template: `
    <div>
      <h1>Not Found <a routerLink="/">go home</a></h1>
    </div>
  `
})
export class NotFoundComponent {
  title: string = "<i>Edutcation angular</i>";
}
