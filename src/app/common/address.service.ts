import { Injectable } from "@angular/core";
import { IAddress } from "../address/address.model";

@Injectable()
export class AddressService {
  getAddresses(): IAddress[] {
    return ADDRESSES.sort((a, b) => a.id - b.id);
  }

  getUsAddresses() {
    let usAdd = [];
    ADDRESSES.find(address => {
      if (address.usAddress) {
        usAdd.push(address.usAddress);
      }
    });
    return usAdd;
  }

  getCanadianAddresses() {
    let canadian = [];
    ADDRESSES.find(address => {
      if (address.canadianAddress) {
        canadian.push(address.canadianAddress);
      }
    });
    return canadian;
  }

  getEvenIds() {
    let evens = [];
    ADDRESSES.find(address => {
      if (address.id % 2 === 0) {
        evens.push(address);
      }
    });
    return evens;
  }

  getAddress(id: number) {
    return ADDRESSES.find(add => add.id === id);
  }
}

const ADDRESSES = [
  {
    id: 1,
    usAddress: {
      name: "My place",
      street: "1234 Random Street",
      street2: "Unit 1000",
      city: "Chicago",
      state: "IL",
      zip: 60661
    }
  },
  {
    id: 8,
    canadianAddress: {
      name: "Poutine Palace",
      street: "9999 Gravy Lane",
      municipality: "Montreal",
      province: "QC",
      postalCode: "H3Z 2Y7"
    }
  },
  {
    id: 2,
    usAddress: {
      name: "Your place",
      street: "9876 Down the street",
      city: "Irvine",
      state: "CA",
      zip: 90651
    }
  },
  {
    id: 9,
    canadianAddress: {
      name: "Ey? Palace",
      street: "1234 Sorry About That Road",
      municipality: "Vancouver",
      province: "BC",
      postalCode: "3JZ 2Y7"
    }
  },
  {
    id: 3,
    usAddress: {
      name: "Somewhere Over the Rainbow",
      street: "123 somewhere",
      city: "Honolulu",
      state: "Hawaii",
      zip: 12345
    }
  },
  {
    id: 4,
    usAddress: {
      name: "His place",
      street: "1010 Over There St",
      street2: "Apt 500",
      city: "Atlanta",
      state: "GA",
      zip: 30331
    }
  },
  {
    id: 5,
    usAddress: {
      name: "Her place",
      street: "3210 Her Street",
      city: "New York",
      state: "New York",
      zip: 10001
    }
  },
  {
    id: 6,
    usAddress: {
      name: "???'s place",
      street: "???? ????? ??????",
      street2: "????? ????",
      city: "?????",
      state: "?????",
      zip: 11111
    }
  },
  {
    id: 7,
    canadianAddress: {
      name: "Maple House",
      street: "1234 Maple Road",
      street2: "Unit 0",
      municipality: "Montreal",
      province: "QC",
      postalCode: "H3Z 2Y7"
    }
  }
];
