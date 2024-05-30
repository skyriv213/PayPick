export interface Store {
  id: number;
  lat: number;
  lng: number;
};

export interface storeData extends Store {
  name: string;
  middleCategory: string;
  address: string;
  paywayList: string | string[];
}