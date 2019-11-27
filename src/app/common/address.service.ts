import { Injectable } from "@angular/core";
import { IAddress } from "../address/address.model";

@Injectable()
export class AddressService {
  getAddresses(): IAddress[] {
    return ADDRESSES;
  }

  getAddress(id: number) {
    return ADDRESSES.find(add => add.id === id);
  }
}

const ADDRESSES = [
  {
    id: 1,
    name: "My place",
    street: "1234 Random Street",
    street2: "Unit 1000",
    city: "Chicago",
    state: "IL",
    zip: 60661
  },
  {
    id: 2,
    name: "Your place",
    street: "9876 Down the street",
    city: "Irvine",
    state: "CA",
    zip: 90651
  },
  {
    id: 3,
    name: "Somewhere Over the Rainbow",
    street: "123 somewhere",
    city: "Honolulu",
    state: "Hawaii",
    zip: 12345
  },
  {
    id: 4,
    name: "His place",
    street: "1010 Over There St",
    street2: "Apt 500",
    city: "Atlanta",
    state: "GA",
    zip: 30331
  },
  {
    id: 5,
    name: "Her place",
    street: "3210 Her Street",
    city: "New York",
    state: "New York",
    zip: 10001
  },
  {
    id: 6,
    name: "???'s place",
    street: "???? ????? ??????",
    street2: "????? ????",
    city: "?????",
    state: "?????",
    zip: 11111
  }
];
