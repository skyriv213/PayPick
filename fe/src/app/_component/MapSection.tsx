"use client"

import Map from './map';
import { NaverMap } from '@/types/map';
import Markers from './markers';
import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useMemo,useCallback, ReactNode, useState } from 'react';
import { Coordinates } from '@/types/map';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';
import StoreDetail from './StoreDetail';
import * as styles from './MapSection.css'
import Modal from './Modal';



const MapSection = () => {
    // const [showModal, setShowModal] = useState(false);
    // const router = useRouter();
    
    // const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), []); // eslint-disable-line react-hooks/exhaustive-deps
    // const initialZoom = useMemo(
    //   () => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM),
    //   [query]
    // );

    // const initialCenter = useMemo<Coordinates>(
    //   () =>
    //     query.get('lat') && query.get('lng')
    //       ? [Number(query.get('lat')), Number(query.get('lng'))]
    //       : INITIAL_CENTER,
    //   [query]
    // );

    const MAP_KEY = '/map'
    const queryClient = new QueryClient()
    const dehydratedState = dehydrate(queryClient)
    const data = queryClient.getQueryData<NaverMap>([MAP_KEY])

    
    // const initializeMap = (map: NaverMap) => {
    //     queryClient.setQueryData([MAP_KEY], map);
    //   }
    const CURRENT_STORE_KEY = '/current-store';
    const clearCurrentStore = () => {
      queryClient.setQueryData([CURRENT_STORE_KEY], null);
    }

    const { initializeMap } = useMap();

    const onLoadMap = (map: NaverMap) => {
        initializeMap(map);
        naver.maps.Event.addListener(map, 'click', clearCurrentStore);
    };

    return (
        <>
        <HydrationBoundary state={dehydratedState}>
            <Map onLoad = {onLoadMap}
            initialZoom={INITIAL_ZOOM}
            initialCenter={INITIAL_CENTER}/>
            <Markers />
            <div className={styles.displayModal} >
                <StoreDetail />
            </div>
        </HydrationBoundary>
        </>
    );
};

export default MapSection;