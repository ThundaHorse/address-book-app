import { Component, OnInit } from "@angular/core";
import { IUser } from "../user.model";
import { AddressService } from "../../common/address.service";

@Component({
  templateUrl: "./profile.component.html",
  styles: [``]
})
export class ProfileComponent implements OnInit {
  displayInfo: boolean;
  testUser: IUser = {
    firstName: "First name",
    lastName: "Last name",
    email: "p",
    password: "p"
  };
  usAddresses: IUser[];
  caAddresses: IUser[];

  constructor(private addressService: AddressService) {}

  ngOnInit() {
    if (localStorage.getItem("signedIn") === "true") {
      this.displayInfo = true;
    }

    this.usAddresses = this.addressService.getUsAddresses();
    this.caAddresses = this.addressService.getCanadianAddresses();
  }
}
