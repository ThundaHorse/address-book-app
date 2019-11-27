import { Component, Input } from "@angular/core";

@Component({
  selector: "address-show",
  template: `
    <div
      [ngClass]="card"
      (mouseover)="card = shadowed"
      (mouseout)="card = noShadow"
    >
      <h3 class="card-header">{{ address.name }}</h3>
      <div class="card-body">
        <p class="card-text">
          {{ address.street }}
        </p>
        <p class="card-text">
          {{ address?.street2 }}
        </p>
        <p class="card-text">
          {{ address.city }}, {{ address.state }} {{ address.zip }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        min-height: 14rem;
      }
    `
  ]
})
export class AddressShowComponent {
  @Input() address: any;
  card: string = "card text-white bg-dark";
  shadowed: string = "card text-white bg-secondary shadow rounded";
  noShadow: string = "card text-white bg-dark";
}
