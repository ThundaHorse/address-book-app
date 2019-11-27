import { Component, OnInit } from "@angular/core";
import { AddressService } from "../common/address.service";
import { IAddress } from "./address.model";

@Component({
  selector: "",
  template: `
    <h1>Addresses</h1>
    <div class="card-columns">
      <div *ngFor="let address of addresses">
        <address-show [address]="address"></address-show>
      </div>
    </div>
  `,
  styles: [
    `
      .card-columns {
        @include media-breakpoint-only(lg) {
          column-count: 4;
        }
        @include media-breakpoint-only(xl) {
          column-count: 5;
        }
      }
    `
  ]
})
export class AddressIndexComponent implements OnInit {
  addresses: IAddress[];
  constructor(private addressService: AddressService) {}

  ngOnInit() {
    this.addresses = this.addressService.getAddresses();
  }
}
