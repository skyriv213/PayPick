"use client"

import { useEffect } from "react";
import { Marker } from "@/types/map";


export default function Marker ({ map, coordinates}: Marker)  {

  useEffect(() => {
    let marker: naver.maps.Marker | null = null;
    console.log(map);
    
    if (map) {
      marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.5753411, 126.97680949),
        map: map,
        icon:{
          url: '/marker.svg',
          size: new naver.maps.Size(30, 45),
          origin: new naver.maps.Point(0, 0),
          scaledSize: new naver.maps.Size(30 , 45),
        }
      });
    }

    // if (onClick) {
    //     naver.maps.Event.addListener(marker, 'click', onClick);
    // }

    return () => {
    marker?.setMap(null);
    };
  }, [map]); // eslint-disable-line react-hooks/exhaustive-deps
  return null;
  };