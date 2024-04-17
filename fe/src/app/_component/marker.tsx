"use client"

import { useEffect } from "react";
import { Marker as MarkerType  } from "@/types/map";

const Marker = ({ map, coordinates}: MarkerType): null => {
    
  useEffect(() => {
      if (!map) return;
      let marker: naver.maps.Marker | null = null;
      if (map) {
          marker = new naver.maps.Marker({
          map: map,
          position: new naver.maps.LatLng(...coordinates),
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
}, [map]);

return null;
};

export default Marker;