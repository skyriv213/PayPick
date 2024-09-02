export interface Payment {
  id: number;
  payType: string;
}

export interface Store {
  id: number;
  lat: number;
  lng: number;
}

export interface storeData extends Store {
  name: string;
  middleCategory: string;
  address: string;
  paymentList: Payment[];
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