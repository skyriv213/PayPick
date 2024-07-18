import { useCallback, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Coordinates, NaverMap } from '@/types/map';

export const INITIAL_CENTER: Coordinates = [37.693314,126.779666];
export const INITIAL_ZOOM = 17;
export const MAP_KEY = "map"

 const useMap = () => {
  const queryClient = useQueryClient()

  const initializeMap = (map: NaverMap) => {
    queryClient.setQueryData([MAP_KEY], map);
  }
  
  const resetMapOptions = useCallback(() => {
    const map = queryClient.getQueryData<NaverMap>([MAP_KEY]);
    if (!map) return;
    map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
  }, [])

  const getMapOptions = useCallback(() => {
    const map = queryClient.getQueryData<NaverMap>([MAP_KEY]);
    const mapCenter = map?.getCenter() as naver.maps.LatLng;
    const center: Coordinates = [mapCenter.lat(), mapCenter.lng()];
    const zoom = map?.getZoom();
    return { center, zoom };
  }, [])

  const getCornerCoordinates = (map:NaverMap) => {
      const bounds = map.getBounds() as naver.maps.LatLngBounds;
      const southWest = bounds.getSW();
      const northEast = bounds.getNE();
      const boundary = new URLSearchParams({
        boundary: `${southWest.y};${southWest.x};${northEast.y};${northEast.x}`
      }).toString();
    return { boundary };
  }

  const [center, setCenter] = useState<Coordinates>(INITIAL_CENTER);

  const getGeoLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
        },
        () => {
          setCenter(INITIAL_CENTER);
        }
      );
    } else {
      setCenter(INITIAL_CENTER);
    }
  }, []);

  return {
    initializeMap,
    resetMapOptions,
    getMapOptions,
    getCornerCoordinates,
    getGeoLocation,
    center,
  };
};

export default useMap;