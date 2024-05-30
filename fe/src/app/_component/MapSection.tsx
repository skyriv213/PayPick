"use client"

import Map from './map';
import { NaverMap } from '@/types/map';
import Markers from './markers';
import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import useMap, { INITIAL_ZOOM } from '@/hooks/useMap';
import useStore from '@/hooks/useStore';
import StoreDetail from './StoreDetail';
import { useModalStore } from '@/store/modal';
import { useEffect } from 'react';


const MapSection = () => {
    const queryClient = new QueryClient()
    const dehydratedState = dehydrate(queryClient)
    const { rerenderModal } = useModalStore()
    const { initializeMap, getGeoLocation, center } = useMap();
    const { clearCurrentStore } = useStore()

    const onLoadMap = (map: NaverMap) => {
        initializeMap(map);
        naver.maps.Event.addListener(map, 'click', clearCurrentStore);
        naver.maps.Event.once
        let timer: ReturnType<typeof setTimeout> | undefined;
        naver.maps.Event.addListener(map, "bounds_changed", function () { // 디바운스 블로그 소재
        if (timer) {
            clearTimeout(timer);
            }
            timer = setTimeout(function () {
            rerenderModal(true)
          },100);
        });
    }
    
    useEffect(() => {
        getGeoLocation();
      }, []);
    
    return (
        <>
            <HydrationBoundary state={dehydratedState}>
                <Map onLoad = {onLoadMap}
                initialZoom={INITIAL_ZOOM}
                initialCenter={center}/>
                <Markers />
                <StoreDetail />
            </HydrationBoundary>
        </>
    );
};

export default MapSection;

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