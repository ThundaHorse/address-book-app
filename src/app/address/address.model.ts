export interface IAddress {
  id: number;
  usAddress?: {
    name: string;
    street: string;
    street2?: string;
    city: string;
    state: string;
    zip: number;
  };
  canadianAddress?: {
    name: string;
    street: string;
    street2?: string;
    municipality: string;
    province: string;
    postalCode: string;
  };
}
