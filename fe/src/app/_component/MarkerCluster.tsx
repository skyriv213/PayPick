import { useEffect, useState, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import RerenderButton from './RerenderButton';
import { useModalStore } from '@/store/modal';
import { Store } from '@/types/store';
import { NaverMap } from '@/types/map';
import { getApi } from '@/hooks/api';
import useMap, { MAP_KEY } from '@/hooks/useMap';
import useStore, { STORE_KEY, CURRENT_STORE_KEY } from '@/hooks/useStore';
import {makeMarkerClustering} from '@/hooks/cluster'
import { createHtmlMarkers } from './htmlMarker'; 

const MarkerCluster = () => {
  const { getCornerCoordinates } = useMap();
  const { storeModal } = useModalStore();
  const { setCurrentStore, clearCurrentStore } = useStore();
  const { data: currentStore } = useQuery<Store>({ queryKey: [CURRENT_STORE_KEY] });
  const { data: map } = useQuery<NaverMap>({ queryKey: [MAP_KEY] });
  const [corner, setCorner] = useState<string>('');


  async function getMarkers(corner: string) {
    const url = `/store?${corner}`;
    return getApi(url);
  }

  const { data: stores, refetch } = useQuery<Store[]>({
    queryKey: [STORE_KEY],
    queryFn: () => corner ? getMarkers(corner) : Promise.resolve(undefined),
    enabled: !!corner, // corner가 정의된 경우에만 쿼리 실행
  });

  useEffect(() => {
    if (map) {
      const { boundary } = getCornerCoordinates(map);
      setCorner(boundary);
    }
  }, [map, getCornerCoordinates]);


  const MarkerClick =(store: Store) => {
    setCurrentStore(store);
    storeModal(true);
  };

  useEffect(() => {
    if (!stores || !map) return;
    
    const MarkerClustering = makeMarkerClustering(window.naver);
    const [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4] = createHtmlMarkers(window.naver);
          
      const markers: naver.maps.Marker[] = [];
      stores?.forEach((store) => {
        const marker = new naver.maps.Marker({
          map: map,
          position: new naver.maps.LatLng(...[store.lat,store.lng]),
          icon:{
            url: '/marker.svg',
            size: new naver.maps.Size(38, 58),
            anchor: new naver.maps.Point(19, 58),
          }
        });
        
        naver.maps.Event.addListener(marker, 'click', () => MarkerClick(store));
        markers.push(marker);
      });
        
      const markerClustering = new MarkerClustering({
        minClusterSize: 5,
        maxZoom: 16,
        map,
        markers,
        disableClickZoom: false,
        gridSize: 200,
        icons: [htmlMarker1, htmlMarker2, htmlMarker3, htmlMarker4],
        indexGenerator: [20, 50, 100, 300],
        stylingFunction: function (clusterMarker: any, count: number) {
          clusterMarker.getElement().querySelector('span').textContent = count;
        },
      });
      
    }, [map, stores]);

  return (
    <>
      <RerenderButton refetchMarkers={refetch} />
    </>
  );
};

export default MarkerCluster;