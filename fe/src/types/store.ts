// type x = number
// type y = number

// export type storePosition = [x, y]
import { Coordinates } from "./map";

// export type Stores = {
//   id: number;
//   storeName: string;
//   majorCategory: string;
//   middleCategory: string;
//   storeAddress: string;
//   storePosition?: storePosition;
//   paywayList: string | string[]
// };

export type store = {
  id: string;
  storeName: string; 
  majorCategory: string;
  middleCategory: string;
  storeAddress: string;
  paywayList: string[]
}