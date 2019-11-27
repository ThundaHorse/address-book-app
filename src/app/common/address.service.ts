import { Injectable } from "@angular/core";
import { IAddress } from "../address/address.model";

@Injectable()
export class AddressService {
  getAddresses(): IAddress[] {
    return ADDRESSES;
  }

  getUsAddresses() {
    let usAdd = [];
    ADDRESSES.find(address => {
      usAdd.push(address.usAddress);
    });
    return usAdd;
  }

  getCanadianAddresses() {
    let canadian = [];
    ADDRESSES.find(address => {
      canadian.push(address.canadianAddress);
    });
    return canadian;
  }

  getAddress(id: number) {
    return ADDRESSES.find(
      add => add.usAddress.id === id || add.canadianAddress.id === id
    );
  }
}

const ADDRESSES = [
  {
    usAddress: {
      id: 1,
      name: "My place",
      street: "1234 Random Street",
      street2: "Unit 1000",
      city: "Chicago",
      state: "IL",
      zip: 60661
    }
  },
  {
    usAddress: {
      id: 2,
      name: "Your place",
      street: "9876 Down the street",
      city: "Irvine",
      state: "CA",
      zip: 90651
    }
  },
  {
    usAddress: {
      id: 3,
      name: "Somewhere Over the Rainbow",
      street: "123 somewhere",
      city: "Honolulu",
      state: "Hawaii",
      zip: 12345
    }
  },
  {
    usAddress: {
      id: 4,
      name: "His place",
      street: "1010 Over There St",
      street2: "Apt 500",
      city: "Atlanta",
      state: "GA",
      zip: 30331
    }
  },
  {
    usAddress: {
      id: 5,
      name: "Her place",
      street: "3210 Her Street",
      city: "New York",
      state: "New York",
      zip: 10001
    }
  },
  {
    usAddress: {
      id: 6,
      name: "???'s place",
      street: "???? ????? ??????",
      street2: "????? ????",
      city: "?????",
      state: "?????",
      zip: 11111
    }
  },
  {
    canadianAddress: {
      id: 7,
      name: "Maple House",
      street: "1234 Maple Road",
      street2: "Unit 0",
      municipality: "Montreal",
      province: "QC",
      postalCode: "H3Z 2Y7"
    }
  }
];
