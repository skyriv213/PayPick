export interface Store {
  id: number;
  lat: number;
  lng: number;
}

export interface storeData extends Store {
  name: string;
  middleCategory: string;
  address: string;
  paymentList: string | string[];
}

export interface reportData {
  id?: number;
  lat?: number;
  lng?: number;
  name?: string;
  middleCategory?: string;
  address?: string;
  paymentList?: string | string[];
  reportId: number;
  errorType: string;
  errorContent?: string
}