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
    name: "Abe's place",
    street: "3120 N Pine Island Rd",
    street2: "Unit 402",
    city: "Sunrise",
    state: "FL",
    zip: 33351
  },
  {
    id: 2,
    name: "Mom's place",
    street: "10945 Glenbarr Drive",
    city: "Duluth",
    state: "GA",
    zip: 30096
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
    name: "Stella's place",
    street: "3120 N Pine Island Rd",
    street2: "Unit 402",
    city: "Sunrise",
    state: "FL",
    zip: 33351
  },
  {
    id: 5,
    name: "Nala's place",
    street: "3120 N Pine Island Rd",
    street2: "Unit 402",
    city: "Sunrise",
    state: "FL",
    zip: 33351
  },
  {
    id: 6,
    name: "Cayde's place",
    street: "3120 N Pine Island Rd",
    street2: "Unit 402",
    city: "Sunrise",
    state: "FL",
    zip: 33351
  }
];
