import { useQuery } from '@tanstack/react-query';
import { NaverMap } from '@/types/map';
import { Coordinates, mapCorner } from '@/types/map';
import { Store } from '@/types/store';
import Marker from "./marker";
import useStore, { CURRENT_STORE_KEY } from '@/hooks/useStore';
import { MAP_KEY } from '@/hooks/useMap';
import { useEffect, useState } from 'react';

const Markers = () => {
  async function getStores(coordinates: mapCorner) {
    const res = await fetch(`http://localhost:8080/store`, {
      body: JSON.stringify(coordinates)
    });
  
    if (!res.ok) {
      console.log('Failed fetch data');
    }
    return await res.json()
  }
  
  
  const { setCurrentStore, clearCurrentStore } = useStore();
  const { data: currentStore } = useQuery<Store>({ queryKey: [CURRENT_STORE_KEY] });
  const { data: map } = useQuery<NaverMap>({ queryKey: [MAP_KEY] });
  const [coordinates, setCoordinates] = useState<mapCorner | undefined>(undefined);

  useEffect(() => {
    if (map) {
      const bounds = map.getBounds() as naver.maps.LatLngBounds;
      const southWest = bounds.getSW();
      const northEast = bounds.getNE();
      const newCoordinates = {
        leftPosition: { lat: southWest.y, lng: southWest.x },
        rightPosition: { lat: northEast.y, lng: northEast.x }
      };
      setCoordinates(newCoordinates);
    }
  }, [map]);
  // async function getStores(coordinates: mapCorner) { // 쿼리스트링 방식 get요청
  //   const queryString = new URLSearchParams(coordinates).toString(); // coordinates를 쿼리 스트링으로 변환
  //   const url = `http://localhost:8080/store?${queryString}`; // URL에 쿼리 스트링 추가
  //   const res = await fetch(url);
  
  //   if (!res.ok) {
  //     console.log('Failed fetch data');
  //   }
  //   return await res.json()
  // }

  const { data: stores, isLoading, error } = useQuery<Store[]>({
    queryKey: ["stores"],
    queryFn: () => coordinates ? getStores(coordinates) : Promise.resolve(undefined),
    enabled: !!coordinates, // coordinates가 정의된 경우에만 쿼리 실행
  });
  // const coordinates = getCoordinatesFromBounds(map.getBounds() as naver.maps.LatLngBounds);
  console.log(coordinates);
  // console.log(stores);
  
  const convertToCoordinates = (lat: number, lng: number): Coordinates => {
    return [lat, lng];
  };
  // if (isLoading) return <div>Loading...</div>;

  // if (error) return <div>{error.message}</div>; // 에러 발생시 UI 처리
  // if (error) return console.log(error.message);
  
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

// const bounds = map?.getBounds() as naver.maps.LatLngBounds;
  // const swLatLng = bounds?.getSW();  // 남서쪽 좌표
  // const neLatLng = bounds?.getNE();  // 북동쪽 좌표
//   const coordinates : mapCorner = {
//     leftPosition: { lat: swLatLng.x, lng: swLatLng.y },
//   rightPosition: { lat: neLatLng.x, lng: neLatLng.y }
// }


// import { useQuery } from '@tanstack/react-query';
// import { NaverMap } from '@/types/map';
// import { Coordinates, mapCorner } from '@/types/map';
// import { Store } from '@/types/store';
// import Marker from "./marker";
// import useStore, { CURRENT_STORE_KEY } from '@/hooks/useStore';
// import { MAP_KEY } from '@/hooks/useMap';

// const Markers = () => {
//   async function getStores(coordinates: mapCorner) {
//     const res = await fetch(`http://localhost:8080/store`, {
//       body: JSON.stringify(coordinates)
//     });
  
//     if (!res.ok) {
//       console.log('Failed fetch data');
//     }
//     return await res.json()
//   }
//   const { setCurrentStore, clearCurrentStore } = useStore();
//   const { data: currentStore } = useQuery<Store>({ queryKey: [CURRENT_STORE_KEY] });
//   const { data: map } = useQuery<NaverMap>({ queryKey: [MAP_KEY] });
//   const getCoordinatesFromBounds = (bounds: naver.maps.LatLngBounds | undefined): mapCorner | undefined => {
//     if (!bounds) {
//       // bounds가 undefined일 경우, console.error를 호출하고 undefined를 반환
//       console.error("Map bounds are undefined.");
//       return undefined; // 명시적으로 undefined 반환
//     }
  
//     // bounds가 유효할 때의 처리 로직
//     const southWest = bounds.getSW();
//     const northEast = bounds.getNE();
//     return {
//       leftPosition: { lat: southWest.x, lng: southWest.y },
//       rightPosition: { lat: northEast.x, lng: northEast.y }
//     };
//   };
//   const coordinates = getCoordinatesFromBounds(map?.getBounds() as naver.maps.LatLngBounds);
//   console.log(coordinates);
//   console.log(map);
//   const { data: stores } = useQuery<Store[]>({
//     queryKey: ["stores"],
//     queryFn: () => getStores(coordinates!),
//   });
//   console.log(stores);

//   const convertToCoordinates = (lat: number, lng: number): Coordinates => {
//     return [lat, lng];
//   };






// export default Markers;