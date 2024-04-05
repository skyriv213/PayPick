import { useCallback } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { Coordinates } from '@/types/map';


type NaverMap = naver.maps.Map;

type lat = number
type lng = number


export const INITIAL_CENTER: Coordinates = [37.395628,126.929901];
export const INITIAL_ZOOM = 15;
export const MAP_KEY = '/map'

 function useMap() {
  const queryClient = new QueryClient()
  const map = queryClient.getQueryData<NaverMap>([MAP_KEY]);

  const initializeMap = useCallback((map: NaverMap) => {
    queryClient.setQueryData([MAP_KEY], map);
    console.log(map);
  },[]);

  const resetMapOptions = () => {
    if (!map) return;
    map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
  };

  const getMapOptions = useCallback(() => {
    if (!map) return;
    const mapCenter = map.getCenter() as naver.maps.LatLng;
    const center: Coordinates = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();
  
    return { center, zoom };
  }, [map]);

//   const getMarkers = useCallback((map: NaverMap) => {
//     const bounds = map.getBounds() as naver.maps.PointBounds;
//     const leftPosition = bounds.getSW();  // 남서쪽 좌표
//     const rightPosition = bounds.getNE();  // 북동쪽 좌표
//     return { leftPosition, rightPosition };
//   }, []);

//   type Props = {
//     url:string;
//     data:{}
// };

//   async function getStores( url:string, data?:{}) {
//     const res = await fetch(`http://localhost:8080/${url}`,
//     {
//       body: JSON.stringify(data)
//     })
//   }

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
  

  return {
    initializeMap,
    resetMapOptions,
    getMapOptions,
    // getMarkers
  };
};

export default useMap
