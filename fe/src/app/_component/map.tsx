"use client"

import Script from "next/script";
import { useEffect, useRef } from "react";
import * as styles from './map.css'
import { NaverMap, Coordinates } from "@/types/map";
import { INITIAL_CENTER, INITIAL_ZOOM } from "@/hooks/useMap";

type Props = {
    mapId?: string;
    initialCenter?: Coordinates
    initialZoom?: number;
    onLoad?: (map: naver.maps.Map) => void;
};

const Map = ({
    initialCenter = INITIAL_CENTER,
    initialZoom = INITIAL_ZOOM,
    onLoad,
}: Props) => {
    console.log('render');

    const mapRef = useRef<NaverMap | null>(null);

    const initializeMap = () => {
        const mapOptions = {
            center: new naver.maps.LatLng(...initialCenter),
            zoom: initialZoom,
            minZoom: 9,
            scaleControl: false,
            mapDataControl: false,
            logoControlOptions: {
            position: naver.maps.Position.BOTTOM_RIGHT,
            },
        };
        //새로운 네이버 맵 인스턴스 생성 
        const map = new window.naver.maps.Map('map', mapOptions);
        mapRef.current = map;
        let marker: naver.maps.Marker | null = null;
        if (map) {
          marker = new naver.maps.Marker({
            position: new naver.maps.LatLng([37.5602411, 126.98789549]),
            map: map,
            icon:{
                url: '/marker.svg',
                size: new naver.maps.Size(30, 45),
                origin: new naver.maps.Point(0, 0),
                scaledSize: new naver.maps.Size(30 , 45)
               }
          });
        }

        if (onLoad) {
            onLoad(map);
        }
    };
    
    //맵이 언마운트 되었을때 맵 인스턴스 destroy하기
    useEffect(() => {
        return () => {
            mapRef.current?.destroy();
        };
    }, []);

    return (
        <>
            <Script
                strategy="afterInteractive"
                type = "text/javascript"
                src = {`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_ID}`}
                onReady = {initializeMap}
            />
            <div id = 'map' className={styles.mapSize}/>
            
        </>
    )
}

export default Map;