"use client"

import Script from "next/script";
import { useEffect, useRef } from "react";
import * as styles from './map.css'
import { NaverMap, Coordinates } from "@/types/map";
import { INITIAL_ZOOM } from "@/hooks/useMap";

type Props = {
    mapId?: string;
    initialCenter: Coordinates
    initialZoom: number;
    onLoad?: (map: naver.maps.Map) => void;
};

const Map = ({
    mapId = 'map',
    initialCenter,
    initialZoom = INITIAL_ZOOM,
    onLoad,
}: Props) => {
    
    const mapRef = useRef<NaverMap | null>(null);

    const initializeMap = () => {
        const mapOptions = {
            center: new naver.maps.LatLng(...initialCenter),
            zoom: initialZoom,
            minZoom: 10,
            scaleControl: false,
            mapDataControl: false,
            disableDoubleTapZoom:true,
            zoomControl:true,
            zoomControlOptions: {
                position: naver.maps.Position.BOTTOM_RIGHT,
                style: naver.maps.ZoomControlStyle.SMALL,
            },
            logoControlOptions: {
                position: naver.maps.Position.BOTTOM_LEFT,
            },
        };
        //새로운 네이버 맵 인스턴스 생성 
        const map = new window.naver.maps.Map(mapId, mapOptions);
        mapRef.current = map;

        if (onLoad) {
            onLoad(map);
        }
    };

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setCenter(new naver.maps.LatLng(...initialCenter));
        }
    }, [initialCenter]);

    // useEffect(() => { // next/Link 사용시 destroy하면 다른 페이지 이동했다가 다시 홈화면으로 왔을시 빈화면 렌더링 되는 문제로 주석 처리
    //     return () => {
    //         mapRef.current?.destroy();
    //     };
    // }, []);

    return (
        <>
            <Script
                strategy="afterInteractive"
                type = "text/javascript"
                src = {`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_ID}`}
                onReady = {initializeMap}
            />
            <div id = {mapId} className={styles.mapSize}/>
            
        </>
    )
}

export default Map;