type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export type mapCorner = {
  leftPosition: { lat: Lat, lng: Lng },
  rightPosition: { lat: Lat, lng: Lng }
};

export type NaverMap = naver.maps.Map;

export type Marker = {
    map?: NaverMap;
    coordinates : Coordinates
    // icon: SvgIcon;
    onClick?: () => void;
  };

  export type SvgIcon = {
    // isSelected: boolean
    url: string;
    size: naver.maps.Size;
    origin: naver.maps.Point;
    scaledSize?: naver.maps.Size;
  }