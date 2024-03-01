"use client"

import { QueryClient, useQuery } from '@tanstack/react-query';
import { SvgIcon } from "@/types/map";
import Marker from "./marker";
import { NaverMap, Coordinates} from '@/types/map';



const stores = [
  {
    storeId: '1',
    Name : 'string',
    coordinates: [37.5753411, 126.97680949]
  }
]



function Markers() {

  const MAP_KEY = '/map'
  const queryClient = new QueryClient();
  const data = queryClient.getQueryData<NaverMap>([MAP_KEY])
  // console.log(data);
  
  const map = data
  return (
    <>
      {stores.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={[37.5753411, 126.97680949]}
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