type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export type NaverMap = naver.maps.Map;

export interface Marker {
    map?: NaverMap;
    coordinates : Coordinates
    // icon: SvgIcon;
    onClick: () => void;
  };

  export interface SvgIcon {
    // isSelected: boolean
    url: string;
    size: naver.maps.Size;
    origin: naver.maps.Point;
    scaledSize?: naver.maps.Size;
  }