"use client"

import Map from './map';
import { NaverMap } from '@/types/map';
import Markers from './markers';
import { HydrationBoundary, dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import useMap, { INITIAL_CENTER, INITIAL_ZOOM, MAP_KEY } from '@/hooks/useMap';
import useStore from '@/hooks/useStore';
import StoreDetail from './StoreDetail';


const MapSection = () => {
    const queryClient = new QueryClient()
    const dehydratedState = dehydrate(queryClient)

    const { initializeMap } = useMap();
    const { clearCurrentStore } = useStore()

    const onLoadMap = (map: NaverMap) => {
        initializeMap(map);
        console.log(map);
        naver.maps.Event.addListener(map, 'click', clearCurrentStore);
    };

    const data = queryClient.getQueryData<NaverMap>([MAP_KEY])
    console.log(data);

    return (
        <>
            <HydrationBoundary state={dehydratedState}>
                <Map onLoad = {onLoadMap}
                initialZoom={INITIAL_ZOOM}
                initialCenter={INITIAL_CENTER}/>
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