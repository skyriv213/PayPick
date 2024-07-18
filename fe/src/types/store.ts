export interface Store {
  id: string;
  lat: number;
  lng: number;
};

export interface storeData extends Store {
  name: string;
  middleCategory: string;
  address: string;
  paywayList: string | string[];
}