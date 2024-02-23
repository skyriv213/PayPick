"use client"

import Map from './map';
import { NaverMap } from '@/types/map';
import Markers from './markers';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useMemo,useCallback } from 'react';
import { Coordinates } from '@/types/map';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM } from '@/hooks/useMap';

const MapSection = () => {
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
    const { initializeMap } = useMap();

    const CURRENT_STORE_KEY = '/current-store';
    const queryClient = useQueryClient();
    const clearCurrentStore = useCallback(() => {
      queryClient.setQueryData([CURRENT_STORE_KEY], null);
    }, [queryClient]);

    const onLoadMap = (map: NaverMap) => {
        initializeMap(map);
        naver.maps.Event.addListener(map, 'click', clearCurrentStore);
    };

    return (
        <>
            <Map onLoad = {onLoadMap} 
             initialZoom={12}
             initialCenter={[37.5602411, 126.98789549]}/>
            <Markers/>
        </>
    );
};

export default MapSection;