type latitude = number
type longitude = number
export type coor = [latitude, longitude]

export type Store = {
  id: number;
  name: string;
  majorCategory?: string;
  middleCategory?: string;
  address: string;
  paywayList: string | string[]
};

export type Stores = {
  id: number;
  storeName: string;
  middleCategory: string;
  latitude: number;
  longitude: number;
};