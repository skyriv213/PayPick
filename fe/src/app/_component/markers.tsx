"use client"

import { useQueryClient } from '@tanstack/react-query';
import { SvgIcon } from "@/types/map";
import Marker from "./marker";
import { MAP_KEY } from "@/hooks/useMap";
import { NaverMap } from '@/types/map';


const stores = [
  {
    storeId: '1',
    Name : 'string',
    lat : 37.5753411,
    lng : 126.97680949
  },
  {
    storeId: '2',
    Name : 'string',
    lat : 37.4944247962443,
    lng : 127.03868553433001
  }
]



function Markers() {
  const queryClient = useQueryClient();
  const map = queryClient.getQueryData<NaverMap>([MAP_KEY]);

  return (
    <>
      {stores.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={[37.5602411, 126.98789549]}
            // icon={generateMarkerIcon()}
            key={store.storeId}
            onClick={() => {}}
          />
        );
      })}
    </>
  );
}


export default Markers

// export function generateMarkerIcon(): SvgIcon {
  
//   /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-8-marker-retina-sprite.example.html */
//   return {
//       url: '/marker.svg',
//       size: new naver.maps.Size(30, 45),
//       origin: new naver.maps.Point(0, 0),
//       scaledSize: new naver.maps.Size(30 , 45),
//   };
// }