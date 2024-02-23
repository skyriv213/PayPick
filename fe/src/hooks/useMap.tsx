import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';

type Lat = number;
type Lng = number;
type Coordinates = [Lat, Lng];
type NaverMap = naver.maps.Map;

export const INITIAL_CENTER: Coordinates = [37.5602411, 126.98789549];
export const INITIAL_ZOOM = 12;

export const MAP_KEY = '/map';

const useMap = () => {
  const queryClient = useQueryClient();
  const map = queryClient.getQueryData<NaverMap>([MAP_KEY]);

  const initializeMap = useCallback((map: NaverMap) => {
    queryClient.setQueryData([MAP_KEY], map);
  }, [queryClient]);

  const resetMapOptions = useCallback(() => {
    if (!map) return;
    map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
  }, [map]);

  const getMapOptions = useCallback(() => {
    if (!map) return;
    const mapCenter = map.getCenter() as naver.maps.LatLng;
    console.log(mapCenter);
    
    const center: Coordinates = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map.getZoom();
  
    return { center, zoom };
  }, [map]);
  

  return {
    initializeMap,
    resetMapOptions,
    getMapOptions,
  };
};
export default useMap;
