import { Component, Input } from "@angular/core";
import { IAddress } from "./address.model";

@Component({
  selector: "address-show",
  template: `
    <div
      [ngClass]="card"
      (mouseover)="card = shadowed"
      (mouseout)="card = noShadow"
    >
      <h3 class="card-header" [routerLink]="['/addresses', address.id]">
        {{ usOrCanadianAddress(address).name }}
      </h3>
      <div class="card-body">
        <p class="card-text">
          {{ usOrCanadianAddress(address).street }}
        </p>
        <p class="card-text">
          {{ usOrCanadianAddress(address)?.street2 }}
        </p>
        <p class="card-text">
          {{ usOrCanadianAddress(address)?.province }}
          {{ usOrCanadianAddress(address)?.city }},
          {{ usOrCanadianAddress(address)?.state }}
          {{ usOrCanadianAddress(address)?.municipality }}
          {{ usOrCanadianAddress(address)?.zip }}
          {{ usOrCanadianAddress(address)?.postalCode }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        min-height: 14rem;
      }
      h3.card-header {
        cursor: pointer;
      }
      h3.card-header:hover {
        color: cyan;
      }
    `
  ]
})
export class AddressShowComponent {
  @Input() address: IAddress;
  card: string = "card text-white bg-dark rounded";
  shadowed: string = "card text-white bg-secondary shadow rounded";
  noShadow: string = "card text-white bg-dark rounded";

  usOrCanadianAddress(input) {
    return input.usAddress ? input.usAddress : input.canadianAddress;
  }
}
