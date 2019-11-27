import { Component, OnInit } from "@angular/core";
import { AddressService } from "../common/address.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  template: `
    <a [routerLink]="['/addresses']">< Back</a>
    <h1>{{ address?.usAddress?.name }} {{ address?.canadianAddress?.name }}</h1>
    <br />
    <p>
      {{ address?.usAddress?.street }} {{ address?.canadianAddress?.street }}
    </p>
    <p>
      {{ address?.usAddress?.street2 }} {{ address?.canadianAddress?.street2 }}
    </p>
    <p>
      {{ address?.usAddress?.city }}
      {{ address?.canadianAddress?.municipality }},
      {{ address?.usAddress?.state }} {{ address?.canadianAddress?.province }}
      {{ address?.usAddress?.zip }} {{ address?.canadianAddress?.postalCode }}
    </p>
  `,
  styles: [``]
})
export class AddressDetailsComponent implements OnInit {
  address: any;
  constructor(
    private addressService: AddressService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.address = this.addressService.getAddress(
      +this.route.snapshot.params["id"]
    );
  }
}
