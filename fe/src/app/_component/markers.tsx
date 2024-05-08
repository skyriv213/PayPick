import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Marker from "./marker";
import { getApi } from '@/hooks/api';
import { NaverMap, Coordinates, Corner } from '@/types/map';
import { Store } from '@/types/store';
import useStore, { STORE_KEY, CURRENT_STORE_KEY } from '@/hooks/useStore';
import { MAP_KEY } from '@/hooks/useMap';

const Markers = () => {
  
  const { setCurrentStore, clearCurrentStore } = useStore();
  const { data: currentStore } = useQuery<Store>({ queryKey: [CURRENT_STORE_KEY] });
  const { data: map } = useQuery<NaverMap>({ queryKey: [MAP_KEY] });
  const [corner, setCorner] = useState<Corner | undefined>(undefined);

  useEffect(() => {
    if (map) {
      const bounds = map.getBounds() as naver.maps.LatLngBounds;
      const southWest = bounds.getSW();
      const northEast = bounds.getNE();
      const boundary = new URLSearchParams({
        boundary: `${southWest.y};${southWest.x};${northEast.y};${northEast.x}`
      }).toString();
      setCorner(boundary);
    }
  }, [map]);

  async function getStores(corner: Corner) {
    const url = `http://localhost:8080/store?${corner}`;
    try {
      const data = await getApi(url);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  const { data: stores } = useQuery<Store[]>({
    queryKey: [STORE_KEY],
    queryFn: () => corner ? getStores(corner) : Promise.resolve(undefined),
    enabled: !!corner, // corner가 정의된 경우에만 쿼리 실행
  });

  const convertToCoordinates = (lat: number, lng: number): Coordinates => {
    return [lat, lng];
  };
  
  return (
    <>
      {stores?.map((store) => {
        const coordinates: Coordinates = convertToCoordinates(store.lat, store.lng);
        return (
          <Marker
            map={map}
            coordinates={coordinates}
            key={store.id}
            onClick={() => {
              setCurrentStore(store)
            }}/>
        );
      })}
      {currentStore && (
        <Marker
          map={map}
          coordinates={[currentStore.lat, currentStore.lng]}
          onClick={clearCurrentStore}
          key={currentStore.id}
        />
      )}
    </>
  );
};

export default Markers;