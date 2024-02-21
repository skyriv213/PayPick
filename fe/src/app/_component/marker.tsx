import { useEffect } from "react";
import { Marker } from "../types/map";


export default function Marker ({ map, coordinates, icon, onClick }: Marker)  {

  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    if (map) {
        marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5602411, 126.98789549),
        icon: {
          url: '/marker.png',
          size: new naver.maps.Size(35, 50),
          origin: new naver.maps.Point(17.5, 50),
          scaledSize: new naver.maps.Size( 54*13 , 64)
        },
    });
    }

    if (onClick) {
        naver.maps.Event.addListener(marker, 'click', onClick);
    }

    return () => {
    marker?.setMap(null);
    };
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
  };