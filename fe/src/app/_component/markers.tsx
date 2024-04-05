"use client"

import { QueryClient, useQuery } from '@tanstack/react-query';
import { SvgIcon } from "@/types/map";
import Marker from "./marker";
import { NaverMap, Coordinates} from '@/types/map';



const stores = [
  {
    storeId: '1',
    Name : 'string',
    coordinates: [37.395628,126.929901],
  },
  {
    storeId: '2',
    Name : 'string',
    coordinates: [37.395629, 126.929911],
  }
]

  type Stores = {
    id: number;
    storeName: string;
    middleCategory: string;
    latitude: number;
    longitude: number;
  };

  // {
    //   "leftPosition": {
    //     "latitude": 37.395628,
    //     "longitude": 126.929901
    //   },
    //   "rightPosition": {
    //     "latitude": 37.406551,
    //     "longitude": 126.93025
    //   }
    // }
    type Props = {
      Coordinates: Coordinates;
    }



function Markers() {

  // async function getStores(coordinates:Props) {
  //   const res = await fetch(`http://localhost:8080/store`,
  //   {
  //     body: JSON.stringify(coordinates)
  //   })

  //   if(!res.ok) {
  //     throw new Error('Failed fetch data');
  //   }
  //   return await res.json();
  // }

  // const { data } = useQuery<Stores>({ queryKey: ["/stores"], queryFn: getStores });
  // console.log(data);
  

  const MAP_KEY = '/map'
  const queryClient = new QueryClient();
  const map = queryClient.getQueryData<NaverMap>([MAP_KEY])
  console.log(map);
  
  return (
    <>
      {stores.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={store.coordinates}
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