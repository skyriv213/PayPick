export type Store = {
  id: number;
  name: string;
  majorCategory?: string;
  middleCategory?: string;
  address?: string;
  lat: number;
  lng: number;
  coordinates: [number, number]
  paywayList?: string | string[]
};

// export type Stores = {
//   id: number;
//   name: string;
//   middleCategory: string;
//   lat: number;
//   lng: number;
// };