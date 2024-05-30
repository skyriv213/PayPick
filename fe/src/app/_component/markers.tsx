import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Marker from "./marker";
import RerenderButton from './RerenderButton';
import { useModalStore } from '@/store/modal';
import { Store } from '@/types/store';
import { NaverMap, Coordinates } from '@/types/map';
import { getApi } from '@/hooks/api';
import useMap, { MAP_KEY } from '@/hooks/useMap';
import useStore, { STORE_KEY, CURRENT_STORE_KEY } from '@/hooks/useStore';

const Markers = () => {
  
  const { getCornerCoordinates } = useMap()
  const { storeModal } = useModalStore()
  const { setCurrentStore, clearCurrentStore } = useStore();
  const { data: currentStore } = useQuery<Store>({ queryKey: [CURRENT_STORE_KEY] });
  const { data: map } = useQuery<NaverMap>({ queryKey: [MAP_KEY] });
  const [corner, setCorner] = useState<string>('');

  useEffect(() => {
    if (map) {
      const { boundary } = getCornerCoordinates(map);
      setCorner(boundary);
    }
  }, [map, getCornerCoordinates]);

  async function getStores(corner: string) {
    const url = `http://localhost:8080/store?${corner}`;    
    return getApi(url);
  }
  
  const { data: stores, refetch } = useQuery<Store[]>({ // refetch 블로그 소재
    queryKey: [STORE_KEY],
    queryFn: () => corner ? getStores(corner) : Promise.resolve(undefined),
    enabled: !!corner, // corner가 정의된 경우에만 쿼리 실행
  })
  
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
              storeModal(true)
            }}
          />
        );
      })}
      {currentStore && (
        <Marker
          map={map}
          coordinates={[currentStore.lat, currentStore.lng]}
          onClick={() => {
            clearCurrentStore
          }}
          key={currentStore.id}
        />
      )}
      <RerenderButton refetchStores={refetch}/>
    </>
  );
};

export default Markers;