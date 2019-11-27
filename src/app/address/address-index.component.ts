import { Component, OnInit } from "@angular/core";
import { AddressService } from "../common/address.service";
import { IAddress } from "./address.model";

@Component({
  selector: "",
  template: `
    <div class="jumbotron jumbotron-fluid">
      <h1 class="display-4">Addresses</h1>
    </div>
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
      .jumbotron {
        background-color: dimgray;
      }
      h1.display-4 {
        text-align: center;
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
