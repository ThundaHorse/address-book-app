export interface IAddress {
  usAddress?: {
    id: number;
    name: string;
    street: string;
    street2?: string;
    city: string;
    state: string;
    zip: number;
  };
  canadianAddress?: {
    id: number;
    name: string;
    street: string;
    street2?: string;
    municipality: string;
    province: string;
    postalCode: string;
  };
}
