import { useQuery } from '@tanstack/react-query';
import { NaverMap } from '@/types/map';
import { Coordinates, mapCorner } from '@/types/map';
import { Store } from '@/types/store';
import Marker from "./marker";
import useStore, { STORE_KEY, CURRENT_STORE_KEY } from '@/hooks/useStore';
import { MAP_KEY } from '@/hooks/useMap';
import { useEffect, useState } from 'react';

const Markers = () => {
  // async function getStores(coordinates: mapCorner) {
  //   const res = await fetch(`http://localhost:8080/store`, {
  //     body: JSON.stringify(coordinates)
  //   });
  
  //   if (!res.ok) {
  //     console.log('Failed fetch data');
  //   }
  //   return await res.json()
  // }
  
  const { setCurrentStore, clearCurrentStore } = useStore();
  const { data: currentStore } = useQuery<Store>({ queryKey: [CURRENT_STORE_KEY] });
  const { data: map } = useQuery<NaverMap>({ queryKey: [MAP_KEY] });
  const [corner, setCorner] = useState<string | undefined>(undefined);

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

  async function getStores(corner: string) { // 쿼리스트링 방식 get요청
    const url = `http://localhost:8080/store?${corner}`; // URL에 쿼리 스트링 추가
    const res = await fetch(url);
  
    if (!res.ok) {
      console.log('Failed fetch data');
    }
    return await res.json()
  }

  const { data: stores, isLoading, error } = useQuery<Store[]>({
    queryKey: [STORE_KEY],
    queryFn: () => corner ? getStores(corner) : Promise.resolve(undefined),
    enabled: !!corner, // corner가 정의된 경우에만 쿼리 실행
  });
  // console.log(corner);
  
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>; // 에러 발생시 UI 처리
  // if (error) return console.log(error.message);

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