export interface NewHotelType {
  Title?: string;
  Description?: string;
  Location?: string;
  Country?: string;
  Price?: number;
  Stars?: number;
  id?: string;
  Review?: string;
  Feature?: string;
}

export interface AddHotelType {
  Title?: string;
  Description?: string;
  Location?: string;
  Country?: string;
  Price?: string;
  Stars?: string;
  Review?: string;
  Feature?: string;
}